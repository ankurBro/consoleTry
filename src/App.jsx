import React from 'react';
import BlogShare from './components/BlogShare';

function App() {
  const blogData = [
    {
      title: 'Nepal weather update from console',
      image:
        'https://unncdn.prixacdn.net/media/albums/revenue__final_hxUkRjv34E.jpg.360x240_q75_crop-smart_upscale.jpg',
      description:
        "'आज देशभर आंशिकदेखि सामान्यतया बदली रही वर्षाको सम्भावना छ।',",
      slug: 'weather-today-nepal',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <BlogShare blog={blogData} />
    </div>
  );
}

export default App;
