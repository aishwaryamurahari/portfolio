import { useEffect, useRef, useCallback } from 'react';
import analytics from '@/lib/analytics';

export const useAnalytics = () => {
  const startTimeRef = useRef<number>(Date.now());
  const visitedSectionsRef = useRef<Set<string>>(new Set());

  // Track page visit on mount
  useEffect(() => {
    analytics.trackPageVisit('home');

    // Track time spent when user leaves the page
    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        analytics.trackTimeSpent(timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Track section views when they come into viewport
  const trackSectionView = useCallback((sectionName: string) => {
    if (!visitedSectionsRef.current.has(sectionName)) {
      visitedSectionsRef.current.add(sectionName);
      analytics.trackSectionView(sectionName);
    }
  }, []);

  // Track resume download
  const trackResumeDownload = useCallback(() => {
    analytics.trackResumeDownload();
  }, []);

  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    analytics.trackButtonClick(buttonName, location);
  }, []);

  // Track external link clicks
  const trackExternalLink = useCallback((linkName: string, url: string) => {
    analytics.trackExternalLink(linkName, url);
  }, []);

  // Track contact form submission
  const trackContactSubmission = useCallback(() => {
    analytics.trackContactSubmission();
  }, []);

  // Create a wrapper for external links
  const createExternalLinkHandler = useCallback((linkName: string, url: string) => {
    return () => {
      trackExternalLink(linkName, url);
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  }, [trackExternalLink]);

  // Create a wrapper for resume download
  const createResumeDownloadHandler = useCallback(() => {
    return () => {
      trackResumeDownload();
    };
  }, [trackResumeDownload]);

  return {
    trackSectionView,
    trackResumeDownload,
    trackButtonClick,
    trackExternalLink,
    trackContactSubmission,
    createExternalLinkHandler,
    createResumeDownloadHandler,
  };
};

export default useAnalytics;