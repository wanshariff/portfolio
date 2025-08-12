import { useEffect } from 'react';

// Google Analytics 4 Event Tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Portfolio',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters
    });
  }
};

// Microsoft Clarity Custom Tags
export const trackClarity = (tag: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', tag, data || {});
  }
};

// Portfolio View Tracking
export const trackPortfolioView = (projectTitle: string, projectId: string) => {
  trackEvent('portfolio_view', {
    project_title: projectTitle,
    project_id: projectId,
    label: projectTitle
  });
  
  trackClarity('portfolio_interaction', {
    type: 'project_view',
    project: projectTitle
  });
};

// Contact Form Tracking
export const trackContactForm = (action: 'start' | 'submit' | 'error', formData?: Record<string, any>) => {
  trackEvent('contact_form', {
    contact_action: action,
    form_type: 'main_contact',
    ...formData
  });
  
  if (action === 'submit') {
    trackClarity('conversion', {
      type: 'contact_form_submission',
      source: 'portfolio_site'
    });
  }
};

// Download Tracking (for future resume/portfolio downloads)
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    download_location: 'portfolio_site'
  });
  
  trackClarity('lead_generation', {
    type: 'file_download',
    file: fileName
  });
};

// Navigation Tracking
export const trackNavigation = (section: string, source: string = 'menu') => {
  trackEvent('navigation', {
    section_name: section,
    navigation_source: source
  });
};

// CTA Button Tracking
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location
  });
  
  trackClarity('engagement', {
    type: 'cta_interaction',
    cta: ctaName,
    location: location
  });
};

// Scroll Depth Tracking
export const useScrollDepthTracking = () => {
  useEffect(() => {
    let maxScrollDepth = 0;
    let trackingIntervals = [25, 50, 75, 90, 100];
    let trackedDepths = new Set();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollDepth = Math.round((scrolled / scrollHeight) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        trackingIntervals.forEach(interval => {
          if (scrollDepth >= interval && !trackedDepths.has(interval)) {
            trackedDepths.add(interval);
            trackEvent('scroll_depth', {
              scroll_depth: interval,
              max_scroll: maxScrollDepth
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Page Performance Tracking
export const trackPagePerformance = () => {
  useEffect(() => {
    // Track page load time
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (performance.getEntriesByType) {
          const perfData = performance.getEntriesByType('navigation')[0] as any;
          if (perfData) {
            trackEvent('page_performance', {
              load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
              dom_ready: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
              first_paint: Math.round(perfData.responseStart - perfData.fetchStart)
            });
          }
        }
      }, 1000);
    });

    // Simple performance tracking without web-vitals dependency
    if (typeof window !== 'undefined' && 'performance' in window) {
      setTimeout(() => {
        const paintEntries = performance.getEntriesByType('paint');
        if (paintEntries.length > 0) {
          paintEntries.forEach((entry) => {
            trackEvent('core_web_vitals', { 
              metric_name: entry.name, 
              value: Math.round(entry.startTime) 
            });
          });
        }
      }, 2000);
    }
  }, []);
};

// Social Share Tracking
export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('social_share', {
    platform: platform,
    content_type: content,
    share_location: 'portfolio_site'
  });
  
  trackClarity('social_engagement', {
    platform: platform,
    action: 'share'
  });
};

// Lead Quality Scoring (for future lead management)
export const trackLeadQuality = (source: string, engagement: Record<string, any>) => {
  let leadScore = 0;
  
  // Score based on engagement
  if (engagement.portfolio_views > 2) leadScore += 20;
  if (engagement.time_on_site > 120) leadScore += 30; // 2+ minutes
  if (engagement.contact_form_started) leadScore += 25;
  if (engagement.downloads > 0) leadScore += 15;
  if (engagement.scroll_depth > 75) leadScore += 10;
  
  trackClarity('lead_scoring', {
    source: source,
    score: leadScore,
    engagement: engagement
  });
  
  return leadScore;
};

// Declare global gtag and clarity functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

export default {
  trackEvent,
  trackClarity,
  trackPortfolioView,
  trackContactForm,
  trackDownload,
  trackNavigation,
  trackCTA,
  useScrollDepthTracking,
  trackPagePerformance,
  trackSocialShare,
  trackLeadQuality
};