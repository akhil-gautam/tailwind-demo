import React from 'react';

const Post = () => {
  return (
    <div className="flex flex-col border">
      <div className="flex items-center px-3 mb-2 mt-2">
        <img
          alt=""
          src="https://bit.ly/3oGOCc8"
          className="h-12 w-12 object-cover rounded-full mr-4"
        />
        <div className="text-gray-900 text-lg">Ben Martins</div>
        <div className="ml-auto font-extrabold">...</div>
      </div>
      <div className="px-2 text-blue-700">#cool #niceShot #facebook</div>
      <div className="h-72 w-full">
        <img
          src="https://bit.ly/3oGOCc8"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex px-3 font-bold justify-between text-sm text-gray-600">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span>Like</span>
        </div>
        <div>Comment</div>
        <div>Share</div>
      </div>
    </div>
  );
};

export default Post;
