'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useAdmin } from '@/contexts/AdminContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);
  
  const { signIn, resetPassword, user, isAdmin } = useAdmin();
  const router = useRouter();

  // Redirect if already signed in as admin
  if (user && isAdmin) {
    router.push('/admin/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
      router.push('/admin/dashboard');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email address first');
      return;
    }

    try {
      await resetPassword(email);
      setResetSent(true);
      setError('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setError('Failed to send reset email');
    }
  };

  return (
    <div className="flex justify-center items-center bg-background min-h-screen">
      <div className="bg-surface shadow-clean mx-4 p-8 border border-border rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="icon icon-4xl icon-primary icon-shield"></div>
          </div>
          <h1 className="mb-2 font-bold text-text-primary text-2xl">Admin Access</h1>
          <p className="text-text-secondary">Liberty Ridge CMS Login</p>
        </div>

        {/* Reset Password Success */}
        {resetSent && (
          <div className="bg-community-green/10 mb-6 p-4 border border-community-green/30 rounded-lg">
            <p className="text-community-green text-sm">
              Password reset email sent! Check your inbox.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-patriot-red/10 mb-6 p-4 border border-patriot-red/30 rounded-lg">
            <p className="text-patriot-red text-sm">{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-text-primary text-sm">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-surface-elevated px-4 py-3 border focus:border-patriot-blue border-border rounded-lg focus:ring-2 focus:ring-patriot-blue w-full placeholder-text-muted text-text-primary transition-colors"
              placeholder="admin@libertyridgetraining.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 font-medium text-text-primary text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-surface-elevated px-4 py-3 border focus:border-patriot-blue border-border rounded-lg focus:ring-2 focus:ring-patriot-blue w-full placeholder-text-muted text-text-primary transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              loading
                ? 'bg-border text-text-muted cursor-not-allowed'
                : 'bg-patriot-red hover:bg-patriot-red/90 text-white hover:scale-102 transform'
            }`}
          >
            {loading ? 'Signing In...' : 'Sign In to CMS'}
          </button>
        </form>

        {/* Reset Password Link */}
        <div className="mt-6 text-center">
          <button
            onClick={handleResetPassword}
            className="text-patriot-blue hover:text-patriot-red text-sm transition-colors duration-300"
          >
            Forgot your password?
          </button>
        </div>

        {/* Back to Site */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <Link 
            href="/"
            className="text-text-secondary hover:text-patriot-blue text-sm transition-colors duration-300"
          >
            ← Back to Liberty Ridge
          </Link>
        </div>
      </div>
    </div>
  );
}