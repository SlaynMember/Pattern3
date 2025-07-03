import Link from 'next/link';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md transition hover:bg-primary-dark"
        >
          <Home size={18} /> Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;