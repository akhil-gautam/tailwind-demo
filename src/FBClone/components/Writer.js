import React from 'react';

const Writer = () => {
  return (
    <>
      <div className="flex items-center p-2 md:mx-auto md:w-2/5 space-x-3 bg-white">
        <div className="overflow-hidden">
          <img
            alt=""
            src="https://bit.ly/3oGOCc8"
            className="object-cover w-12 h-12 rounded-full"
          />
        </div>
        <textarea
          className="h-16 w-3/5 md:w-10/12 rounded-lg border-2 pl-2 pt-2 focus:outline-none focus:border-gray-900"
          placeholder="Write something here..."
        />
        <div className="w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f2f2f2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-around md:mx-auto md:w-2/5 mb-3 text-blue-900 bg-white">
        <div>Photo</div>
        <div className="border-r"></div>
        <div>Check in</div>
        <div className="border-r"></div>
        <div>&middot;&middot;&middot;&nbsp;More</div>
      </div>
    </>
  );
};

export default Writer;
