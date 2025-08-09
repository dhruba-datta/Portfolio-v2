import { useState, useEffect, useCallback } from 'react';
import { getInstagramPosts, clearInstagramCache } from '../utils/instagram';
import type { InstagramPost } from '../types';

interface UseInstagramReturn {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  clearCache: () => void;
}

export const useInstagram = (limit: number = 6): UseInstagramReturn => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const instagramPosts = await getInstagramPosts(limit);
      setPosts(instagramPosts);
    } catch (err) {
      console.error('Error fetching Instagram posts:', err);
      setError('Unable to load Instagram posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  const refetch = useCallback(async () => {
    await fetchPosts();
  }, [fetchPosts]);

  const clearCache = useCallback(() => {
    clearInstagramCache();
    refetch();
  }, [refetch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    refetch,
    clearCache,
  };
};
