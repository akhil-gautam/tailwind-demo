import React from 'react';

const Post = () => {
  return (
    <div className="flex flex-col mb-3 bg-white rounded-md border shadow-md">
      <div className="flex items-center px-3 mt-2 mb-2">
        <img
          alt=""
          src="https://bit.ly/3oGOCc8"
          className="object-cover mr-4 w-12 h-12 rounded-full"
        />
        <div className="text-lg text-gray-900">Ben Martins</div>
        <div className="ml-auto font-extrabold">&middot;&middot;&middot;</div>
      </div>
      <div className="px-2 text-blue-700">#cool #niceShot #facebook</div>
      <div className="w-full h-72">
        <img
          src="https://bit.ly/3oGOCc8"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between px-3 text-base font-bold text-gray-600">
        <div className="flex p-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
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
        <div className="flex p-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span>Comment</span>
        </div>
        <div className="flex p-2 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
