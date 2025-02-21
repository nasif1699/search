import React from 'react';
import { Dog } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <Dog className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">The Dog's Nose</h1>
          </div>
          <p className="text-center mt-2 text-gray-600">Sniffing out the best results for you</p>
        </div>
      </header>

      {/* Search Form */}
      <main className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="gcse-search"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} The Dog's Nose - Your Trusted Search Companion</p>
      </footer>
    </div>
  );
}

export default App;