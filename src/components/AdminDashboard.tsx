'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAdmin } from '@/contexts/AdminContext';

// Dynamic imports for heavy admin components
const MediaManager = dynamic(() => import('@/components/MediaManager'), {
  loading: () => (
    <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg h-64 animate-pulse">
      <div className="text-gray-500 dark:text-gray-400">Loading media manager...</div>
    </div>
  )
});

const MediaUpload = dynamic(() => import('@/components/MediaUpload'), {
  loading: () => (
    <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg h-64 animate-pulse">
      <div className="text-gray-500 dark:text-gray-400">Loading media upload...</div>
    </div>
  )
});

export default function AdminDashboard() {
  const { user, isAdmin, loading, signOut } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/admin');
    }
  }, [user, isAdmin, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-background min-h-screen">
        <div className="text-center">
          <div className="mb-4 animate-spin icon icon-4xl icon-primary icon-target"></div>
          <p className="text-text-secondary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-surface shadow-clean border-b border-border">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="icon icon-lg icon-primary icon-shield"></div>
              <div>
                <h1 className="font-bold text-text-primary text-xl">Liberty Ridge CMS</h1>
                <p className="text-text-secondary text-sm">Content Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-text-secondary text-sm">
                Welcome, {user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="bg-patriot-red hover:bg-patriot-red/90 px-4 py-2 rounded-lg font-medium text-white text-sm transition-colors duration-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-surface p-6 border border-border rounded-lg">
            <h2 className="mb-2 font-bold text-text-primary text-2xl">Welcome to Your CMS, Zach!</h2>
            <p className="text-text-secondary">
              Upload and manage photos and videos for your consultation platform. 
              All content is automatically optimized and organized for your gallery.
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-surface p-6 border border-border rounded-lg">
            <h3 className="mb-4 font-bold text-text-primary text-xl">Upload Media</h3>
            <MediaUpload />
          </div>

          {/* Media Management Section */}
          <div className="bg-surface p-6 border border-border rounded-lg">
            <h3 className="mb-4 font-bold text-text-primary text-xl">Manage Your Content</h3>
            <MediaManager />
          </div>
        </div>
      </main>
    </div>
  );
}