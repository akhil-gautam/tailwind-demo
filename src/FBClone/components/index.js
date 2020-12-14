import React from 'react';

import Stories from './Stories';
import Header from './Header';
import Writer from './Writer';

const FBClone = () => {
  return (
    <div className="flex flex-col overflow-x-hidden w-full space-y-2">
      <Header />
      <Stories />
      <Writer />
    </div>
  );
};

export default FBClone;
