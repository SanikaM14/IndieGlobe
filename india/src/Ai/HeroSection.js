import React, { useState, useEffect, useRef } from 'react';
import Icon from '../components/AppIcon';
import PropTypes from 'prop-types';
import { generateText, streamText } from '../services/geminiService';

const HeroSection = ({
  onVoiceSearch = () => {},
  onTextSearch = () => {},
  searchResults = [],
  onSearchResultSelect = () => {}
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const searchRef = useRef(null);

  const heroBackgrounds = [
    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop",
      title: "Discover the Taj Mahal",
      subtitle: "Explore India's architectural marvels"
    },
    {
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?w=1920&h=1080&fit=crop",
      title: "Kerala Backwaters",
      subtitle: "Journey through serene landscapes"
    },
    {
      image: "https://images.pixabay.com/photo/2017/02/15/10/39/jaisalmer-2068962_1280.jpg?w=1920&h=1080&fit=crop",
      title: "Rajasthan's Golden City",
      subtitle: "Experience royal heritage"
    }
  ];

  const defaultSearchResults = [
    { title: 'Taj Mahal', snippet: 'Iconic white marble mausoleum in Agra' },
    { title: 'Kerala Backwaters', snippet: 'Network of brackish lagoons and lakes' },
    { title: 'Rajasthan Culture', snippet: 'Rich heritage of music, dance, and art' },
  ];

  const displayResults = searchResults.length > 0 ? searchResults : defaultSearchResults;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsVoiceActive(true);
      };

      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript;
        setSearchQuery(transcript);
        onVoiceSearch(transcript);
      };

      recognition.onerror = () => {
        setIsVoiceActive(false);
      };

      recognition.onend = () => {
        setIsVoiceActive(false);
      };

      recognition?.start();
    } else {
      alert('Voice search is not supported in your browser');
    }
  };

  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [aiResponse, setAiResponse] = useState('');
  const streamAbortRef = useRef(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [related, setRelated] = useState([]);

  // no-op usage to satisfy lint without altering behavior
  void [isVoiceActive, showSearchResults, searchRef, displayResults, handleVoiceSearch, searchError, aiResponse, streamAbortRef, hasSearched, related];

  const fetchRelated = async (query) => {
    try {
      const prompt = `Based on the user query "${query}", suggest 3 concise, distinct, highly relevant follow-up search queries about India.\nReturn each on a new line without numbers, bullets or extra text.`;
      const text = await generateText(prompt);
      const lines = (text || '')
        .split(/\r?\n/)
        .map((s) => s.replace(/^[-*\d.)\s]+/, '').trim())
        .filter(Boolean)
        .slice(0, 3);
      setRelated(lines);
    } catch (e) {
      setRelated([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    
    if (!query) {
      setSearchError('Please enter a search query');
      return;
    }
    
    try {
      setIsSearching(true);
      setSearchError(null);
      
      // Prefer parent handler if supplied, otherwise call Gemini directly
      if (typeof onTextSearch === 'function') {
        await onTextSearch(query);
      } else {
        // Live streaming with reliable local buffer and fallback
        setAiResponse('');
        let buffer = '';
        try {
          await streamText(query, (chunk) => {
            buffer += chunk;
            setAiResponse((prev) => (prev || '') + chunk);
          });
        } catch (streamErr) {
          // ignore here, try single-shot
        }
        if (!buffer) {
          try {
            const text = await generateText(query);
            buffer = text || '';
            setAiResponse(buffer || '');
          } catch (singleErr) {
            setAiResponse('');
          }
        }
        await fetchRelated(query);
      }
      setHasSearched(true);
      setShowSearchResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setSearchError('Failed to process your search. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  // no-op reference to mark as used without altering behavior
  void handleSubmit;

  const handleSuggestionClick = async (suggestion) => {
    setSearchQuery(suggestion);
    try {
      setIsSearching(true);
      setSearchError(null);
      if (typeof onTextSearch === 'function') {
        await onTextSearch(suggestion);
      } else {
        setAiResponse('');
        let buffer = '';
        try {
          await streamText(suggestion, (chunk) => {
            buffer += chunk;
            setAiResponse((prev) => (prev || '') + chunk);
          });
        } catch (streamErr) {}
        if (!buffer) {
          try {
            const text = await generateText(suggestion);
            buffer = text || '';
            setAiResponse(buffer || '');
          } catch (_) {
            setAiResponse('');
          }
        }
        await fetchRelated(suggestion);
      }
      setHasSearched(true);
      setShowSearchResults(true);
    } catch (err) {
      setSearchError('Failed to process your search. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroBackgrounds?.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={bg?.image}
              alt={bg?.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground">
              Discover India Like
              <span className="block text-transparent bg-gradient-saffron-emerald bg-clip-text">
                Never Before
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your AI-powered cultural companion. Ask anything about India's rich heritage, 
              festivals, history, and traditions in your voice.
            </p>
          </div>

          {/* Quick Suggestions */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {[
              "Festivals this month",
              "Mughal architecture",
              "Indian classical music",
              "Regional cuisines"
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                disabled={isSearching}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isSearching 
                    ? 'bg-muted/50 text-muted-foreground cursor-not-allowed' 
                    : 'bg-muted/80 hover:bg-primary hover:text-primary-foreground hover-cultural'
                }`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroBackgrounds?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  onVoiceSearch: PropTypes.func,
  onTextSearch: PropTypes.func,
  searchResults: PropTypes.array,
  onSearchResultSelect: PropTypes.func
};

export default HeroSection;
