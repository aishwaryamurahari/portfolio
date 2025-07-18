import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

interface AnalyticsTrackerProps {
  sectionName: string;
  children: React.ReactNode;
  threshold?: number;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  sectionName,
  children,
  threshold = 0.3, // 30% of the section must be visible
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { trackSectionView } = useAnalytics();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
            // Once tracked, we can stop observing this section
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px', // Trigger when section is 10% from bottom of viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName, trackSectionView, threshold]);

  return <div ref={sectionRef}>{children}</div>;
};

export default AnalyticsTracker;