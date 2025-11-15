// Local storage service for bookmarks, progress, and user preferences
class StorageService {
  constructor() {
    this.prefix = 'bharat_digital_';
  }

  /**
   * Save user bookmark
   * @param {Object} bookmark - Bookmark data
   */
  saveBookmark(bookmark) {
    const bookmarks = this.getBookmarks();
    const newBookmark = {
      id: Date.now(),
      ...bookmark,
      createdAt: new Date()?.toISOString()
    };
    
    bookmarks?.push(newBookmark);
    localStorage.setItem(`${this.prefix}bookmarks`, JSON.stringify(bookmarks));
    return newBookmark;
  }

  /**
   * Get all bookmarks
   * @returns {Array} User bookmarks
   */
  getBookmarks() {
    const stored = localStorage.getItem(`${this.prefix}bookmarks`);
    return stored ? JSON.parse(stored) : [];
  }

  /**
   * Remove bookmark
   * @param {number} bookmarkId - Bookmark ID to remove
   */
  removeBookmark(bookmarkId) {
    const bookmarks = this.getBookmarks();
    const filtered = bookmarks?.filter(b => b?.id !== bookmarkId);
    localStorage.setItem(`${this.prefix}bookmarks`, JSON.stringify(filtered));
  }

  /**
   * Save study progress
   * @param {Object} progress - Progress data
   */
  saveProgress(progress) {
    const allProgress = this.getProgress();
    allProgress[progress.topic] = {
      ...progress,
      lastUpdated: new Date()?.toISOString()
    };
    localStorage.setItem(`${this.prefix}progress`, JSON.stringify(allProgress));
  }

  /**
   * Get study progress
   * @param {string} topic - Specific topic or all progress
   * @returns {Object} Progress data
   */
  getProgress(topic = null) {
    const stored = localStorage.getItem(`${this.prefix}progress`);
    const allProgress = stored ? JSON.parse(stored) : {};
    
    return topic ? allProgress?.[topic] : allProgress;
  }

  /**
   * Save user preferences
   * @param {Object} preferences - User preferences
   */
  savePreferences(preferences) {
    const current = this.getPreferences();
    const updated = { ...current, ...preferences };
    localStorage.setItem(`${this.prefix}preferences`, JSON.stringify(updated));
  }

  /**
   * Get user preferences
   * @returns {Object} User preferences
   */
  getPreferences() {
    const stored = localStorage.getItem(`${this.prefix}preferences`);
    return stored ? JSON.parse(stored) : {
      theme: 'light',
      language: 'English',
      fontSize: 'medium',
      voiceEnabled: true,
      autoRead: false,
      notifications: true
    };
  }

  /**
   * Save study notes
   * @param {Object} notes - Study notes
   */
  saveNotes(notes) {
    const allNotes = this.getNotes();
    const noteData = {
      id: Date.now(),
      ...notes,
      createdAt: new Date()?.toISOString()
    };
    
    allNotes?.push(noteData);
    localStorage.setItem(`${this.prefix}notes`, JSON.stringify(allNotes));
    return noteData;
  }

  /**
   * Get study notes
   * @param {string} topic - Filter by topic
   * @returns {Array} Study notes
   */
  getNotes(topic = null) {
    const stored = localStorage.getItem(`${this.prefix}notes`);
    const allNotes = stored ? JSON.parse(stored) : [];
    
    return topic 
      ? allNotes?.filter(note => note?.topic?.toLowerCase()?.includes(topic?.toLowerCase()))
      : allNotes;
  }

  /**
   * Delete study notes
   * @param {number} noteId - Note ID to delete
   */
  deleteNote(noteId) {
    const allNotes = this.getNotes();
    const filtered = allNotes?.filter(note => note?.id !== noteId);
    localStorage.setItem(`${this.prefix}notes`, JSON.stringify(filtered));
  }

  /**
   * Save search history
   * @param {string} query - Search query
   */
  saveSearchHistory(query) {
    const history = this.getSearchHistory();
    
    // Remove duplicate and add to beginning
    const filtered = history?.filter(item => item?.query !== query);
    filtered?.unshift({
      query,
      timestamp: new Date()?.toISOString()
    });
    
    // Keep only last 50 searches
    const limited = filtered?.slice(0, 50);
    localStorage.setItem(`${this.prefix}search_history`, JSON.stringify(limited));
  }

  /**
   * Get search history
   * @returns {Array} Search history
   */
  getSearchHistory() {
    const stored = localStorage.getItem(`${this.prefix}search_history`);
    return stored ? JSON.parse(stored) : [];
  }

  /**
   * Clear search history
   */
  clearSearchHistory() {
    localStorage.removeItem(`${this.prefix}search_history`);
  }

  /**
   * Export user data as JSON
   * @returns {Object} All user data
   */
  exportUserData() {
    return {
      bookmarks: this.getBookmarks(),
      progress: this.getProgress(),
      preferences: this.getPreferences(),
      notes: this.getNotes(),
      searchHistory: this.getSearchHistory(),
      exportedAt: new Date()?.toISOString()
    };
  }

  /**
   * Import user data from JSON
   * @param {Object} data - User data to import
   */
  importUserData(data) {
    if (data?.bookmarks) {
      localStorage.setItem(`${this.prefix}bookmarks`, JSON.stringify(data?.bookmarks));
    }
    if (data?.progress) {
      localStorage.setItem(`${this.prefix}progress`, JSON.stringify(data?.progress));
    }
    if (data?.preferences) {
      localStorage.setItem(`${this.prefix}preferences`, JSON.stringify(data?.preferences));
    }
    if (data?.notes) {
      localStorage.setItem(`${this.prefix}notes`, JSON.stringify(data?.notes));
    }
    if (data?.searchHistory) {
      localStorage.setItem(`${this.prefix}search_history`, JSON.stringify(data?.searchHistory));
    }
  }

  /**
   * Clear all user data
   */
  clearAllData() {
    const keys = Object.keys(localStorage)?.filter(key => key?.startsWith(this.prefix));
    keys?.forEach(key => localStorage.removeItem(key));
  }
}

// Create and export singleton instance
const storageService = new StorageService();
export default storageService;