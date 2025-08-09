import axios from 'axios';
import type { InstagramPost, InstagramResponse } from '../types';

// Instagram Basic Display API configuration
const INSTAGRAM_USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID || '';
const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '';

// Base URL for Instagram Basic Display API
const INSTAGRAM_API_BASE = 'https://graph.instagram.com';

// Cache configuration
const CACHE_KEY = 'instagram_posts_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

interface CachedData {
  posts: InstagramPost[];
  timestamp: number;
}

/**
 * Check if cached data is still valid
 */
const isCacheValid = (cachedData: CachedData): boolean => {
  return Date.now() - cachedData.timestamp < CACHE_DURATION;
};

/**
 * Get cached Instagram posts
 */
const getCachedPosts = (): InstagramPost[] | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const cachedData: CachedData = JSON.parse(cached);
    if (isCacheValid(cachedData)) {
      return cachedData.posts;
    }
    
    // Remove expired cache
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.warn('Error reading Instagram cache:', error);
    localStorage.removeItem(CACHE_KEY);
    return null;
  }
};

/**
 * Cache Instagram posts
 */
const cachePosts = (posts: InstagramPost[]): void => {
  try {
    const cacheData: CachedData = {
      posts,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.warn('Error caching Instagram posts:', error);
  }
};

/**
 * Fetch Instagram posts from the API
 */
const fetchInstagramPosts = async (limit: number = 6): Promise<InstagramPost[]> => {
  // Check cache first
  const cachedPosts = getCachedPosts();
  if (cachedPosts && cachedPosts.length > 0) {
    return cachedPosts.slice(0, limit);
  }

  // If no access token or user ID, return empty array
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.warn('Instagram API credentials not configured');
    return [];
  }

  try {
    const response = await axios.get<InstagramResponse>(
      `${INSTAGRAM_API_BASE}/${INSTAGRAM_USER_ID}/media`,
      {
        params: {
          fields: 'id,caption,media_type,media_url,permalink,timestamp,thumbnail_url',
          limit: Math.max(limit, 12), // Fetch more for better caching
          access_token: INSTAGRAM_ACCESS_TOKEN,
        },
        timeout: 10000, // 10 second timeout
      }
    );

    const posts = response.data.data || [];
    
    // Cache the posts
    if (posts.length > 0) {
      cachePosts(posts);
    }

    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    
    // Return cached posts if available, even if expired
    const cachedPosts = getCachedPosts();
    if (cachedPosts) {
      return cachedPosts.slice(0, limit);
    }
    
    throw error;
  }
};

/**
 * Generate fallback Instagram posts for development/demo
 */
const getFallbackPosts = (): InstagramPost[] => [
  {
    id: 'fallback_1',
    caption: 'Exploring new perspectives through the lens 📸 #photography #landscape',
    media_type: 'IMAGE',
    media_url: '/images/me.jpg',
    permalink: 'https://www.instagram.com/dhrubz_/',
    timestamp: new Date().toISOString(),
  },
  {
    id: 'fallback_2',
    caption: 'Golden hour magic ✨ When light meets architecture #goldenhour #cityscape',
    media_type: 'IMAGE',
    media_url: '/images/me1.jpg',
    permalink: 'https://www.instagram.com/dhrubz_/',
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  },
  {
    id: 'fallback_3',
    caption: 'Street photography at its finest 🏙️ #street #urban #blackandwhite',
    media_type: 'IMAGE',
    media_url: '/images/me2.jpg',
    permalink: 'https://www.instagram.com/dhrubz_/',
    timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
  },
  {
    id: 'fallback_4',
    caption: 'Nature speaks in colors 🌈 #nature #vibrant #outdoors',
    media_type: 'IMAGE',
    media_url: '/images/Headshot.png',
    permalink: 'https://www.instagram.com/dhrubz_/',
    timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
  },
  {
    id: 'fallback_5',
    caption: 'Capturing moments that matter 📷 #moments #life #photography',
    media_type: 'IMAGE',
    media_url: '/images/me.jpg',
    permalink: 'https://www.instagram.com/dhrubz_/',
    timestamp: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
  },
  {
    id: 'fallback_6',
    caption: 'Behind the scenes of creativity 🎨 #behindthescenes #creative #workflow',
    media_type: 'IMAGE',
    media_url: '/images/me1.jpg',
    permalink: 'https://www.instagram.com/dhrubz_/',
    timestamp: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
  },
];

/**
 * Get Instagram posts with fallback support
 */
export const getInstagramPosts = async (limit: number = 6): Promise<InstagramPost[]> => {
  try {
    const posts = await fetchInstagramPosts(limit);
    return posts.length > 0 ? posts : getFallbackPosts().slice(0, limit);
  } catch (error) {
    console.warn('Using fallback Instagram posts due to API error:', error);
    return getFallbackPosts().slice(0, limit);
  }
};

/**
 * Format Instagram post caption for display
 */
export const formatCaption = (caption: string | undefined, maxLength: number = 100): string => {
  if (!caption) return '';
  
  if (caption.length <= maxLength) return caption;
  
  const truncated = caption.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return truncated.slice(0, lastSpace) + '...';
};

/**
 * Format timestamp for display
 */
export const formatTimestamp = (timestamp: string): string => {
  try {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  } catch (error) {
    console.warn('Error formatting timestamp:', error);
    return '';
  }
};

/**
 * Clear Instagram cache manually
 */
export const clearInstagramCache = (): void => {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (error) {
    console.warn('Error clearing Instagram cache:', error);
  }
};
