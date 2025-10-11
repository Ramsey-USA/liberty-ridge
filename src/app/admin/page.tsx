import dynamicImport from 'next/dynamic';

// Dynamic import for AdminLogin to reduce initial bundle size
const AdminLogin = dynamicImport(() => import('@/components/AdminLogin'), {
  loading: () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg w-96 h-64 animate-pulse">
        <div className="text-gray-500 dark:text-gray-400">Loading admin...</div>
      </div>
    </div>
  )
});

// Force dynamic rendering for admin pages to prevent prerender errors
export const dynamic = 'force-dynamic';

export default function AdminPage() {
  return <AdminLogin />;
}