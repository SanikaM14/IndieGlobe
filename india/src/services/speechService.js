// Web Speech API Service for voice features
class SpeechService {
  constructor() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.isListening = false;
    this.isSupported = this.checkSupport();
  }

  /**
   * Check if Web Speech API is supported
   * @returns {boolean} Support status
   */
  checkSupport() {
    return (
      'webkitSpeechRecognition' in window ||
      'SpeechRecognition' in window ||
      'speechSynthesis' in window
    );
  }

  /**
   * Initialize speech recognition
   * @param {string} language - Recognition language
   * @returns {SpeechRecognition|null} Recognition instance
   */
  initializeRecognition(language = 'en-IN') {
    if (!this.isSupported) {
      console.warn('Speech Recognition not supported');
      return null;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      return null;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = language;
    this.recognition.maxAlternatives = 1;

    return this.recognition;
  }

  /**
   * Start voice recognition
   * @param {Function} onResult - Callback for results
   * @param {Function} onError - Callback for errors
   * @param {string} language - Recognition language
   */
  startListening(onResult, onError, language = 'en-IN') {
    if (!this.initializeRecognition(language)) {
      onError?.('Speech recognition not supported');
      return;
    }

    this.recognition.onresult = (event) => {
      let transcript = '';
      let isFinal = false;

      for (let i = event?.resultIndex; i < event?.results?.length; i++) {
        const result = event?.results?.[i];
        transcript += result?.[0]?.transcript;
        if (result?.isFinal) {
          isFinal = true;
        }
      }

      onResult?.({ transcript, isFinal });
    };

    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event?.error);
      this.isListening = false;
      onError?.(event?.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition?.start();
      this.isListening = true;
    } catch (error) {
      console.error('Error starting recognition:', error);
      onError?.(error?.message);
    }
  }

  /**
   * Stop voice recognition
   */
  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition?.stop();
      this.isListening = false;
    }
  }

  /**
   * Text-to-speech functionality
   * @param {string} text - Text to speak
   * @param {Object} options - Speech options
   */
  speak(text, options = {}) {
    if (!this.synthesis) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Stop any ongoing speech
    this.synthesis?.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Default options
    utterance.lang = options?.lang || 'en-IN';
    utterance.rate = options?.rate || 0.9;
    utterance.pitch = options?.pitch || 1;
    utterance.volume = options?.volume || 0.8;

    // Try to find Indian English voice or fallback to default
    const voices = this.synthesis?.getVoices();
    const indianVoice = voices?.find(voice => 
      voice?.lang?.includes('en-IN') || 
      voice?.lang?.includes('hi-IN') ||
      voice?.name?.toLowerCase()?.includes('indian')
    );

    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    // Event listeners
    utterance.onstart = () => {
      options?.onStart?.();
    };

    utterance.onend = () => {
      options?.onEnd?.();
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      options?.onError?.(event);
    };

    this.synthesis?.speak(utterance);
  }

  /**
   * Stop current speech
   */
  stopSpeaking() {
    if (this.synthesis) {
      this.synthesis?.cancel();
    }
  }

  /**
   * Get available voices for language
   * @param {string} language - Target language
   * @returns {Array} Available voices
   */
  getVoicesForLanguage(language = 'en') {
    if (!this.synthesis) return [];
    
    const voices = this.synthesis?.getVoices();
    return voices?.filter(voice => voice?.lang?.startsWith(language));
  }

  /**
   * Pronounce difficult Indian terms
   * @param {string} term - Term to pronounce
   * @param {string} language - Pronunciation language
   */
  pronounceTerm(term, language = 'en-IN') {
    const pronunciationMap = {
      'Chola': 'CHO-la',
      'Khajuraho': 'kha-ju-RAH-ho',
      'Panchayat': 'pan-CHA-yat',
      'Vedas': 'VAY-das',
      'Ayurveda': 'AH-yur-vay-da',
      'Namaste': 'na-mas-TAY',
      'Dharma': 'DHAR-ma',
      'Karma': 'KAR-ma',
      'Samsara': 'sam-SA-ra',
      'Moksha': 'MOHK-sha'
    };

    const pronunciationText = pronunciationMap?.[term] || term;
    
    this.speak(pronunciationText, {
      lang: language,
      rate: 0.7, // Slower for pronunciation
      onStart: () => console.log(`Pronouncing: ${term}`)
    });
  }

  /**
   * Get recognition languages supported
   * @returns {Array} Supported languages
   */
  getSupportedLanguages() {
    return [
      { code: 'en-IN', name: 'English (India)' },
      { code: 'hi-IN', name: 'Hindi (India)' },
      { code: 'ta-IN', name: 'Tamil (India)' },
      { code: 'bn-IN', name: 'Bengali (India)' },
      { code: 'mr-IN', name: 'Marathi (India)' },
      { code: 'te-IN', name: 'Telugu (India)' },
      { code: 'kn-IN', name: 'Kannada (India)' },
      { code: 'ml-IN', name: 'Malayalam (India)' },
      { code: 'gu-IN', name: 'Gujarati (India)' },
      { code: 'pa-IN', name: 'Punjabi (India)' }
    ];
  }
}

// Create and export singleton instance
const speechService = new SpeechService();
export default speechService;