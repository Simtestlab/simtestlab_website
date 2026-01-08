import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import scrollIntoView from 'scroll-into-view-if-needed';
import useMeasure from 'react-use-measure';

interface UseViewportSectionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  autoScroll?: boolean;
}

export const useViewportSection = (options: UseViewportSectionOptions = {}) => {
  const {
    threshold = 0.5,
    rootMargin = '0px 0px -20% 0px',
    triggerOnce = false,
    autoScroll = false
  } = options;

  const { ref, inView, entry } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const [measureRef, bounds] = useMeasure();
  const [isVisible, setIsVisible] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // Combine refs
  const setRefs = (element: HTMLElement | null) => {
    ref(element);
    measureRef(element);
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      
      // Check if the section fits completely in viewport
      if (bounds.height && window.innerHeight) {
        setIsFullyVisible(bounds.height <= window.innerHeight);
      }
      
      // Auto scroll into view if enabled
      if (autoScroll && entry?.target) {
        scrollIntoView(entry.target, {
          scrollMode: 'if-needed',
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth'
        });
      }
    } else if (!triggerOnce) {
      setIsVisible(false);
      setIsFullyVisible(false);
    }
  }, [inView, triggerOnce, autoScroll, entry, bounds.height]);

  return {
    ref: setRefs,
    isVisible,
    isFullyVisible,
    inView,
    bounds,
    entry,
  };
};

export const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 768
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportHeight;
};

export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollIntoView(element, {
        scrollMode: 'always',
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
      });
    }
  };

  return scrollToSection;
};

// Hook to ensure sections fit in viewport
export const useFitToViewport = (minHeight: number = 600) => {
  const [measureRef, bounds] = useMeasure();
  const [adjustedHeight, setAdjustedHeight] = useState<string>('auto');

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const availableHeight = viewportHeight - 100; // Account for navigation
    
    if (bounds.height > availableHeight && bounds.height > minHeight) {
      setAdjustedHeight(`${Math.max(availableHeight, minHeight)}px`);
    } else {
      setAdjustedHeight('auto');
    }
  }, [bounds.height, minHeight]);

  return {
    ref: measureRef,
    adjustedHeight,
    bounds,
  };
};