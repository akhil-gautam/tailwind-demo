import React from 'react';

import Stories from './Stories';
import Header from './Header';
import Writer from './Writer';
import Post from './Post';

const FBClone = () => {
  return (
    <div className="flex flex-col bg-gray-100 overflow-x-hidden w-full">
      <Header />
      <Writer />
      <Stories />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default FBClone;
