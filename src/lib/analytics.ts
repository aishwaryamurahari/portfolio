// Analytics tracking utilities for portfolio
import emailjs from '@emailjs/browser';

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
}

// Generate a unique session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create session ID from localStorage
const getSessionId = (): string => {
  const existing = localStorage.getItem('portfolio_session_id');
  if (existing) return existing;

  const newSessionId = generateSessionId();
  localStorage.setItem('portfolio_session_id', newSessionId);
  return newSessionId;
};

// Get user ID (if available)
const getUserId = (): string | undefined => {
  return localStorage.getItem('portfolio_user_id') || undefined;
};

// Create analytics event
const createEvent = (
  event: string,
  category: string,
  action: string,
  label?: string,
  value?: number
): AnalyticsEvent => ({
  event,
  category,
  action,
  label,
  value,
  timestamp: Date.now(),
  sessionId: getSessionId(),
  userId: getUserId(),
});

// Check if we should send email notification (rate limiting)
const shouldSendEmailNotification = (event: AnalyticsEvent): boolean => {
  const sessionId = event.sessionId;
  const eventType = event.event;

  // For page visits, only send one email per session
  if (eventType === 'page_visit') {
    const sentVisits = JSON.parse(localStorage.getItem('portfolio_sent_visits') || '[]');
    if (sentVisits.includes(sessionId)) {
      return false;
    }
    sentVisits.push(sessionId);
    localStorage.setItem('portfolio_sent_visits', JSON.stringify(sentVisits.slice(-50))); // Keep last 50
    return true;
  }

  // For resume downloads, send every time (but could add rate limiting here too)
  if (eventType === 'resume_download') {
    return true;
  }

  return false;
};

// Send email notification for important events
const sendEmailNotification = async (event: AnalyticsEvent): Promise<void> => {
  try {
    // Check rate limiting
    if (!shouldSendEmailNotification(event)) {
      console.log('Email notification skipped due to rate limiting');
      return;
    }

    // Get visitor information
    const userAgent = navigator.userAgent;
    const referrer = document.referrer || 'Direct';
    const currentUrl = window.location.href;
    const timestamp = new Date().toLocaleString();

    // Determine event description
    let eventDescription = '';
    let subject = '';

    if (event.event === 'page_visit') {
      eventDescription = 'Someone visited your portfolio website';
      subject = 'Portfolio Visit Notification';
    } else if (event.event === 'resume_download') {
      eventDescription = 'Someone downloaded your resume';
      subject = 'Resume Download Notification';
    }

    // Create email template data
    const templateData = {
      from_name: 'Portfolio Analytics',
      from_email: 'analytics@yourportfolio.com',
      to_name: 'Aishwarya',
      subject: subject,
      message: `
${eventDescription}

Event Details:
- Event: ${event.event}
- Category: ${event.category}
- Action: ${event.action}
- Label: ${event.label || 'N/A'}
- Timestamp: ${timestamp}
- Session ID: ${event.sessionId}

Visitor Information:
- User Agent: ${userAgent}
- Referrer: ${referrer}
- Current URL: ${currentUrl}

This is an automated notification from your portfolio website.
      `.trim(),
    };

    // Send email using EmailJS
    await emailjs.send(
      'service_lrtxvza', // Your EmailJS service ID
      'template_v2f6veb', // Your EmailJS template ID
      templateData,
      'sHY5lJ-wHQaOkSlQ3' // Your EmailJS public key
    );

    console.log('Analytics notification email sent successfully');
  } catch (error) {
    console.error('Failed to send analytics notification email:', error);
  }
};

// Send analytics event to your backend or analytics service
const sendAnalyticsEvent = async (event: AnalyticsEvent): Promise<void> => {
  try {
    // Send email notification for important events
    if (event.event === 'page_visit' || event.event === 'resume_download') {
      await sendEmailNotification(event);
    }

    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // Store in localStorage for offline tracking (optional)
    const storedEvents = JSON.parse(localStorage.getItem('portfolio_analytics_events') || '[]');
    storedEvents.push(event);
    localStorage.setItem('portfolio_analytics_events', JSON.stringify(storedEvents.slice(-100))); // Keep last 100 events
  } catch (error) {
    console.error('Failed to send analytics event:', error);
  }
};

// Analytics tracking functions
export const analytics = {
  // Track page visit
  trackPageVisit: (page: string = 'home') => {
    const event = createEvent('page_visit', 'engagement', 'page_view', page);
    sendAnalyticsEvent(event);
  },

  // Track resume download
  trackResumeDownload: () => {
    const event = createEvent('resume_download', 'engagement', 'download', 'resume', 1);
    sendAnalyticsEvent(event);
  },

  // Track section view
  trackSectionView: (section: string) => {
    const event = createEvent('section_view', 'engagement', 'scroll', section);
    sendAnalyticsEvent(event);
  },

  // Track button click
  trackButtonClick: (buttonName: string, location?: string) => {
    const event = createEvent('button_click', 'engagement', 'click', buttonName, 1);
    if (location) {
      event.label = `${buttonName}_${location}`;
    }
    sendAnalyticsEvent(event);
  },

  // Track external link click
  trackExternalLink: (linkName: string, url: string) => {
    const event = createEvent('external_link', 'engagement', 'click', linkName, 1);
    sendAnalyticsEvent(event);
  },

  // Track contact form submission
  trackContactSubmission: () => {
    const event = createEvent('contact_submission', 'engagement', 'form_submit', 'contact_form', 1);
    sendAnalyticsEvent(event);
  },

  // Track time spent on page
  trackTimeSpent: (seconds: number) => {
    const event = createEvent('time_spent', 'engagement', 'time_on_page', 'home', seconds);
    sendAnalyticsEvent(event);
  },

  // Set user ID (if you want to track returning visitors)
  setUserId: (userId: string) => {
    localStorage.setItem('portfolio_user_id', userId);
  },

  // Get analytics data from localStorage (for debugging)
  getStoredEvents: (): AnalyticsEvent[] => {
    try {
      return JSON.parse(localStorage.getItem('portfolio_analytics_events') || '[]');
    } catch {
      return [];
    }
  },

  // Clear stored events
  clearStoredEvents: () => {
    localStorage.removeItem('portfolio_analytics_events');
  },

  // Clear rate limiting data
  clearRateLimiting: () => {
    localStorage.removeItem('portfolio_sent_visits');
  },

  // Get rate limiting status
  getRateLimitingStatus: () => {
    const sentVisits = JSON.parse(localStorage.getItem('portfolio_sent_visits') || '[]');
    return {
      sentVisits: sentVisits.length,
      lastVisit: sentVisits[sentVisits.length - 1] || null,
    };
  },
};

export default analytics;