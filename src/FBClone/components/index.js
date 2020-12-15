import React from 'react';

import Stories from './Stories';
import Header from './Header';
import Writer from './Writer';
import Post from './Post';

const FBClone = () => {
  return (
    <div className="flex overflow-x-hidden flex-col w-full md:mx-auto bg-gray-100">
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
