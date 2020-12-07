import React from 'react';

import InstagramPost from './components/InstagramPost';

const App = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <p className="text-xl text-center font-extralight pt-6">Instagram Post</p>
      <InstagramPost />
    </div>
  );
};

export default App;
