/**
 * Chatbot functionality for handling common questions
 * Integrates with Firebase Firestore for FAQ data
 */

class ChatbotManager {
  constructor () {
    this.isOpen = false;
    this.messages = [];
    this.faqData = [];
    this.isTyping = false;
    this.messagesContainer = null;
    this.inputField = null;
  }

  /**
   * Initialize the chatbot
   */
  init () {
    this.loadFAQData();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  /**
   * Attach event listeners
   */
  attachEventListeners () {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotInput = document.getElementById('chatbotInput');

    this.messagesContainer = document.getElementById('chatbotMessages');
    this.inputField = chatbotInput;

    if (chatbotToggle) {
      chatbotToggle.addEventListener('click', () => this.toggleChatbot());
    }

    if (chatbotClose) {
      chatbotClose.addEventListener('click', () => this.closeChatbot());
    }

    if (chatbotSend) {
      chatbotSend.addEventListener('click', () => this.handleSendMessage());
    }

    if (chatbotInput) {
      chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSendMessage();
        }
      });

      chatbotInput.addEventListener('input', () => {
        this.adjustInputHeight();
      });
    }
  }

  /**
   * Toggle chatbot visibility
   */
  toggleChatbot () {
    this.isOpen = !this.isOpen;
    const chatbotWindow = document.getElementById('chatbotWindow');

    if (this.isOpen) {
      chatbotWindow.classList.add('active');
      this.inputField?.focus();
    } else {
      chatbotWindow.classList.remove('active');
    }
  }

  /**
   * Close chatbot
   */
  closeChatbot () {
    this.isOpen = false;
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.classList.remove('active');
  }

  /**
   * Handle sending a message
   */
  async handleSendMessage () {
    const message = this.inputField.value.trim();
    if (!message || this.isTyping) return;

    // Add user message
    this.addMessage(message, 'user');
    this.inputField.value = '';
    this.adjustInputHeight();

    // Process the message and get response
    this.showTypingIndicator();

    try {
      const response = await this.processMessage(message);
      this.hideTypingIndicator();
      this.addMessage(response.text, 'bot', response.suggestions);
    } catch (error) {
      this.hideTypingIndicator();
      this.addMessage('I apologize, but I\'m having trouble processing your request right now. Please try again or contact us directly for assistance.', 'bot');
      // Log error for debugging in development
      if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        throw error;
      }
    }
  }

  /**
   * Add a message to the chat
   */
  addMessage (text, sender, suggestions = []) {
    const messageElement = document.createElement('div');
    messageElement.className = `chatbot-message ${sender}`;

    const messageContent = document.createElement('div');
    messageContent.className = 'chatbot-message-content';
    messageContent.innerHTML = `<p>${text}</p>`;

    messageElement.appendChild(messageContent);

    // Add suggestions if provided
    if (suggestions && suggestions.length > 0) {
      const suggestionsContainer = document.createElement('div');
      suggestionsContainer.className = 'chatbot-suggestions';

      suggestions.forEach(suggestion => {
        const suggestionButton = document.createElement('button');
        suggestionButton.className = 'chatbot-suggestion';
        suggestionButton.textContent = suggestion;
        suggestionButton.addEventListener('click', () => {
          this.inputField.value = suggestion;
          this.handleSendMessage();
        });
        suggestionsContainer.appendChild(suggestionButton);
      });

      messageElement.appendChild(suggestionsContainer);
    }

    this.messagesContainer.appendChild(messageElement);
    this.scrollToBottom();

    // Store message in history
    this.messages.push({ text, sender, timestamp: new Date() });
  }

  /**
   * Process user message and generate response
   */
  async processMessage (message) {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const lowerMessage = message.toLowerCase();

    // Find matching FAQ
    const matchedFAQ = this.findMatchingFAQ(lowerMessage);

    if (matchedFAQ) {
      return {
        text: matchedFAQ.answer,
        suggestions: matchedFAQ.followUpSuggestions || []
      };
    }

    // Check for specific keywords and provide contextual responses
    const response = this.generateContextualResponse(lowerMessage);
    return response;
  }

  /**
   * Find matching FAQ based on user message
   */
  findMatchingFAQ (message) {
    let bestMatch = null;
    let highestScore = 0;

    for (const faq of this.faqData) {
      const score = this.calculateMatchScore(message, faq);
      if (score > highestScore && score > 0.3) { // Threshold for relevance
        highestScore = score;
        bestMatch = faq;
      }
    }

    return bestMatch;
  }

  /**
   * Calculate match score between message and FAQ
   */
  calculateMatchScore (message, faq) {
    const messageWords = message.split(/\s+/);
    const keywordMatches = faq.keywords.filter(keyword =>
      messageWords.some(word => word.includes(keyword) || keyword.includes(word))
    );

    // Simple scoring: ratio of matched keywords to total keywords
    return keywordMatches.length / faq.keywords.length;
  }

  /**
   * Generate contextual response for unmatched queries
   */
  generateContextualResponse (message) {
    // Intent detection patterns
    const intents = {
      greeting: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
        responses: [
          'Hello! Welcome to Liberty Ridge Training Grounds. I\'m here to help answer your questions about our firearms training services.',
          'Hi there! How can I assist you with information about our training programs today?'
        ],
        suggestions: ['What services do you offer?', 'How much does training cost?', 'Where are you located?']
      },
      pricing: {
        patterns: ['price', 'cost', 'fee', 'rate', 'charge', 'expensive', 'affordable', 'money'],
        responses: [
          'Our training sessions are competitively priced and vary based on the type and duration of instruction. We offer personalized one-on-one training tailored to your needs. Please book a consultation for detailed pricing information specific to your requirements.',
          'Pricing depends on the specific training program and your individual needs. I\'d recommend scheduling a free consultation where Zach can discuss pricing options that work for your situation.'
        ],
        suggestions: ['Schedule consultation', 'What training options are available?', 'Do you offer group rates?']
      },
      location: {
        patterns: ['where', 'location', 'address', 'directions', 'travel', 'distance'],
        responses: [
          'We\'re based in Pasco, WA and serve the greater Pacific Northwest area. We offer flexible training locations including our facilities and mobile training options for your convenience.',
          'Liberty Ridge Training Grounds serves Pasco, WA and surrounding areas. We can arrange training at our location or come to you for mobile instruction.'
        ],
        suggestions: ['Schedule consultation', 'What areas do you serve?', 'Do you offer mobile training?']
      },
      experience: {
        patterns: ['instructor', 'qualified', 'background', 'experience', 'military', 'veteran', 'credentials'],
        responses: [
          'Our instructor Zach is an Army veteran with extensive military experience in firearms training and tactics. He brings real-world expertise and professional military training methods to every session.',
          'Zach served in the Army and has years of experience in both military and civilian firearms instruction. His background ensures you receive professional, safe, and effective training.'
        ],
        suggestions: ['What training methods do you use?', 'Schedule consultation', 'What services do you offer?']
      },
      safety: {
        patterns: ['safe', 'safety', 'secure', 'accident', 'protection', 'responsible'],
        responses: [
          'Safety is our absolute top priority. Every training session emphasizes proper safety protocols, responsible gun ownership, and thorough safety education. We follow strict safety guidelines to ensure a secure learning environment.',
          'We take safety very seriously. All instruction includes comprehensive safety training, proper handling techniques, and responsible firearm practices. Safety protocols are integrated into every aspect of our training.'
        ],
        suggestions: ['What safety measures do you follow?', 'Are you beginner-friendly?', 'Schedule consultation']
      },
      beginner: {
        patterns: ['beginner', 'new', 'never', 'first time', 'inexperienced', 'novice', 'start'],
        responses: [
          'Absolutely! We welcome complete beginners. Our training programs are specifically designed to accommodate all skill levels, from those who have never handled a firearm to experienced shooters looking to improve their skills.',
          'Perfect! We love working with beginners. Zach specializes in foundational training that builds confidence and proper techniques from the ground up. No prior experience is necessary.'
        ],
        suggestions: ['What does beginner training include?', 'How long is beginner training?', 'Schedule consultation']
      },
      booking: {
        patterns: ['book', 'schedule', 'appointment', 'consultation', 'meeting', 'session'],
        responses: [
          'Great! You can schedule a free consultation directly through our website. Just use the booking form on this page to select a convenient time. During the consultation, we\'ll discuss your goals and create a personalized training plan.',
          'I\'d be happy to help you schedule a consultation. You can use our online booking system to choose a time that works for you. The initial consultation is free and helps us understand your training needs.'
        ],
        suggestions: ['Schedule consultation now', 'What happens during consultation?', 'What should I bring?']
      }
    };

    // Find best matching intent
    let bestIntent = null;
    let bestScore = 0;

    for (const [, intent] of Object.entries(intents)) {
      const score = intent.patterns.reduce((acc, pattern) => {
        return acc + (message.includes(pattern) ? 1 : 0);
      }, 0);

      if (score > bestScore) {
        bestScore = score;
        bestIntent = intent;
      }
    }

    if (bestIntent && bestScore > 0) {
      const randomResponse = bestIntent.responses[Math.floor(Math.random() * bestIntent.responses.length)];
      return {
        text: randomResponse,
        suggestions: bestIntent.suggestions || []
      };
    }

    // Default response for unmatched queries
    return {
      text: 'Thank you for your question! For detailed information about our firearms training services, I\'d recommend booking a free consultation where Zach can address your specific needs and answer any questions you may have.',
      suggestions: ['Schedule consultation', 'View our services', 'Contact us directly']
    };
  }

  /**
   * Add welcome message
   */
  addWelcomeMessage () {
    setTimeout(() => {
      this.addMessage(
        'Hi! I\'m here to answer common questions about our firearms training services. How can I help you today?',
        'bot',
        ['What services do you offer?', 'How much does training cost?', 'Are you beginner-friendly?']
      );
    }, 500);
  }

  /**
   * Show typing indicator
   */
  showTypingIndicator () {
    this.isTyping = true;
    const typingElement = document.createElement('div');
    typingElement.className = 'chatbot-message bot typing-indicator';
    typingElement.innerHTML = `
      <div class="chatbot-message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    this.messagesContainer.appendChild(typingElement);
    this.scrollToBottom();
  }

  /**
   * Hide typing indicator
   */
  hideTypingIndicator () {
    this.isTyping = false;
    const typingIndicator = this.messagesContainer.querySelector('.typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  /**
   * Adjust input field height based on content
   */
  adjustInputHeight () {
    if (this.inputField) {
      this.inputField.style.height = 'auto';
      this.inputField.style.height = Math.min(this.inputField.scrollHeight, 100) + 'px';
    }
  }

  /**
   * Scroll to bottom of messages
   */
  scrollToBottom () {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  /**
   * Load FAQ data (placeholder for Firebase integration)
   */
  async loadFAQData () {
    try {
      // TODO: Replace with Firebase Firestore integration
      this.faqData = [
        {
          id: 1,
          question: 'What types of firearms training do you offer?',
          answer: 'We offer comprehensive training including basic firearm safety, advanced marksmanship, concealed carry training, and tactical mindset development. All programs are tailored to your skill level and goals.',
          keywords: ['services', 'training', 'types', 'offer', 'programs', 'courses'],
          category: 'services',
          followUpSuggestions: ['How long are training sessions?', 'What should I bring?', 'Schedule consultation']
        },
        {
          id: 2,
          question: 'Do you work with complete beginners?',
          answer: 'Absolutely! We specialize in working with shooters of all levels, including complete beginners. Our foundational training focuses on safety, proper handling, and building confidence.',
          keywords: ['beginner', 'new', 'inexperienced', 'first time', 'never shot'],
          category: 'experience',
          followUpSuggestions: ['What does beginner training include?', 'How long does it take to learn?', 'Schedule consultation']
        },
        {
          id: 3,
          question: 'What are your safety protocols?',
          answer: 'Safety is our top priority. We follow strict safety protocols including proper firearm handling procedures, range safety rules, and comprehensive safety education integrated into every session.',
          keywords: ['safety', 'safe', 'protocols', 'rules', 'secure', 'protection'],
          category: 'safety',
          followUpSuggestions: ['Are you certified instructors?', 'What safety equipment is provided?', 'Schedule consultation']
        },
        {
          id: 4,
          question: 'Where do you provide training?',
          answer: 'We serve Pasco, WA and the greater Pacific Northwest. Training can be conducted at our facilities or we can arrange mobile training at a location convenient for you.',
          keywords: ['location', 'where', 'address', 'area', 'serve', 'mobile'],
          category: 'location',
          followUpSuggestions: ['Do you travel to clients?', 'What facilities do you use?', 'Schedule consultation']
        },
        {
          id: 5,
          question: 'What are the instructor\'s qualifications?',
          answer: 'Our instructor Zach is an Army veteran with extensive military training experience. He brings real-world expertise and professional military training methods to civilian instruction.',
          keywords: ['instructor', 'qualified', 'experience', 'military', 'veteran', 'background'],
          category: 'instructor',
          followUpSuggestions: ['What military experience does he have?', 'Is he certified?', 'Schedule consultation']
        },
        {
          id: 6,
          question: 'How much does training cost?',
          answer: 'Our pricing varies based on the type of training and session length. We offer competitive rates for personalized instruction. Please book a consultation for detailed pricing tailored to your needs.',
          keywords: ['price', 'cost', 'fee', 'rate', 'charge', 'expensive', 'affordable'],
          category: 'pricing',
          followUpSuggestions: ['Do you offer package deals?', 'What payment methods do you accept?', 'Schedule consultation']
        },
        {
          id: 7,
          question: 'How do I schedule a consultation?',
          answer: 'You can schedule a free consultation directly through our website booking form. Select a convenient time and we\'ll discuss your goals and create a personalized training plan.',
          keywords: ['schedule', 'book', 'appointment', 'consultation', 'meeting'],
          category: 'booking',
          followUpSuggestions: ['What happens during consultation?', 'How long is the consultation?', 'Schedule consultation now']
        }
      ];
    } catch (error) {
      // Silently handle FAQ loading errors
      this.faqData = [];
    }
  }
}

// Chatbot styles
const chatbotStyles = `
  .chatbot-message-content {
    margin-bottom: var(--spacing-xs);
  }

  .chatbot-message p {
    margin: 0;
    line-height: var(--line-height-normal);
  }

  .chatbot-suggestions {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    margin-top: var(--spacing-sm);
  }

  .chatbot-suggestion {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: inherit;
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-md);
    cursor: pointer;
    font-size: var(--font-size-sm);
    text-align: left;
    transition: all var(--transition-fast);
    font-family: var(--font-family);
  }

  .chatbot-suggestion:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .chatbot-message.user .chatbot-suggestion {
    background-color: rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2);
  }

  .chatbot-message.user .chatbot-suggestion:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.3);
  }

  .typing-indicator .typing-dots {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .typing-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-text-muted);
    animation: typing-bounce 1.4s ease-in-out infinite both;
  }

  .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
  .typing-dots span:nth-child(2) { animation-delay: -0.16s; }
  .typing-dots span:nth-child(3) { animation-delay: 0s; }

  @keyframes typing-bounce {
    0%, 80%, 100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .chatbot-input input {
    resize: none;
    overflow-y: auto;
    min-height: 36px;
    max-height: 100px;
  }
`;

// Add chatbot styles to document
const chatbotStyleSheet = document.createElement('style');
chatbotStyleSheet.textContent = chatbotStyles;
document.head.appendChild(chatbotStyleSheet);

// Initialize chatbot
let chatbotManager;

function initChatbot () {
  chatbotManager = new ChatbotManager();
  chatbotManager.init();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initChatbot, 100);
  });
} else {
  setTimeout(initChatbot, 100);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChatbotManager;
}
