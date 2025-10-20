
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <div className="text-center">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            Hello, World!
          </h1>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 blur-2xl -z-10"></div>
        </div>
        <p className="mt-4 text-lg text-gray-400">
          Welcome to your first React application.
        </p>
      </div>
    </main>
  );
};

export default App;
