import React from 'react';
import { useMetaTags, StructuredData, OptimizedImage } from './lib/seo';
import { BookOpen } from 'lucide-react';

function App() {
  useMetaTags({
    title: 'React SEO Library Demo',
    description: 'A comprehensive SEO library for React applications',
    openGraph: {
      title: 'React SEO Library',
      description: 'Boost your React app\'s SEO with our comprehensive library',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@yourusername',
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData
        type="WebSite"
        data={{
          name: 'React SEO Library',
          description: 'A comprehensive SEO library for React applications',
        }}
      />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center space-x-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">React SEO Library</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Features Demo</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Meta Tags Management</h3>
              <p className="text-gray-600">Dynamic meta tags are already applied to this page!</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Optimized Images</h3>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
                alt="SEO Optimization"
                className="rounded-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;