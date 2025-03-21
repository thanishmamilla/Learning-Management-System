import React, { useState } from 'react';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: 'The Future of Web Development',
      image: 'https://source.unsplash.com/800x400/?technology,web',
      content: 'Web development is rapidly evolving with new frameworks and tools. Staying updated with the latest trends is crucial for developers to remain competitive.'
    },
    {
      title: 'Understanding React Hooks',
      image: 'https://source.unsplash.com/800x400/?reactjs,programming',
      content: 'React Hooks have revolutionized the way developers build components. Learn how to leverage useState and useEffect for dynamic, functional components.'
    },
    {
      title: 'CSS Tricks for Modern UI Design',
      image: 'https://source.unsplash.com/800x400/?css,design',
      content: 'Mastering CSS can significantly improve your UI design. Discover advanced CSS techniques for creating stunning, responsive layouts.'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Latest Blog Posts</h1>
      <div className="max-w-6xl mx-auto p-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300 cursor-pointer">{blog.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{blog.content.substring(0, 100)}...</p>
              <button 
                onClick={() => setSelectedBlog(blog)} 
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl  h-5/6 w-full p-8 relative"> {/* Increased max-width and padding */}
            <button 
              onClick={() => setSelectedBlog(null)} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-80 object-cover rounded-lg mb-4" /> {/* Increased height */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{selectedBlog.title}</h2> {/* Increased font size */}
            <p className="text-gray-700 leading-relaxed text-lg">{selectedBlog.content}</p> {/* Increased font size */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;