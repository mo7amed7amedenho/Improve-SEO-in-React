import { useEffect } from 'react';
import type { MetaTagsProps } from '../types';

export const useMetaTags = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  robots,
}: MetaTagsProps) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
    }

    // Handle canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', canonical);
    }

    // Handle Open Graph tags
    if (openGraph) {
      Object.entries(openGraph).forEach(([key, value]) => {
        if (value) {
          updateMetaTag(`og:${key}`, value);
        }
      });
    }

    // Handle Twitter tags
    if (twitter) {
      Object.entries(twitter).forEach(([key, value]) => {
        if (value) {
          updateMetaTag(`twitter:${key}`, value);
        }
      });
    }

    // Handle robots meta
    if (robots) {
      updateMetaTag('robots', robots);
    }

    // Cleanup function
    return () => {
      // Remove dynamic meta tags on unmount if needed
    };
  }, [title, description, canonical, openGraph, twitter, robots]);
};