import React from 'react';
import { Helmet } from 'react-helmet';

function BlogShare({ blog }) {
  const shareUrl = `http://localhost:5173/blog/${blog.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(blog.title);

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={blog.title} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:description" content={blog.description} />
      </Helmet>

      <div className="blog-content ">
        <h1 className="font-serif bg-white p-4">
          Welcome to{' '}
          <span className="text-xl text-red-500 font-bold">Console</span> Blog
          page
        </h1>

        <div className="blog-details bg-green-50  h-screen ">
          {blog.map((post, idx) => {
            return (
              <div
                key={idx}
                className="blog-post w-80 shadow-xl border-2 p-4 flex flex-col items-center justify-center space-y-3"
              >
                <h4 className="font-semibold font-sans">{post.title}</h4>
                <img className="w-50" src={post.image} alt="" />
                <p>{post.description}</p>

                <div className="share">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                        '_blank'
                      )
                    }
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Share on Facebook
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
                        '_blank'
                      )
                    }
                    className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
                  >
                    Share on Twitter
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
                        '_blank'
                      )
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Share on WhatsApp
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogShare;
