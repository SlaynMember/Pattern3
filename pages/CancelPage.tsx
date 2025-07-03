import { useEffect } from 'react';
import Link from 'next/link';
import { XCircle } from 'lucide-react';

export default function CancelPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <XCircle className="w-16 h-16 text-red-500 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Purchase Cancelled</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your purchase was cancelled. If you have any questions, please don't hesitate to contact us.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}