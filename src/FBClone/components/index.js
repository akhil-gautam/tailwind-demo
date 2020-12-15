import React from 'react';

import Stories from './Stories';
import Header from './Header';
import Writer from './Writer';
import Post from './Post';

const FBClone = () => {
  return (
    <div className="flex flex-col overflow-x-hidden w-full space-y-2">
      <Header />
      <Writer />
      <div className="bg-gray-100 h-2 w-full"></div>
      <div className="flex justify-between px-3 text-md text-gray-700">
        <div>Stories</div>
        <div className="text-purple-400">Your archive</div>
      </div>
      <Stories />
      <Post />
    </div>
  );
};

export default FBClone;
