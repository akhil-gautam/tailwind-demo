import React from 'react';

const Stories = () => {
  return (
    <>
      <div className="flex justify-between px-3 bg-white text-md text-gray-700">
        <div>Stories</div>
        <div className="text-purple-400">Your archive</div>
      </div>
      <div className="w-screen bg-white overflow-x-scroll scroller-snap pl-3 py-2 mb-3">
        <div className="inline-flex space-x-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="relative w-32 rounded-xl shadow-md h-64 scroll-item">
      <img
        src="https://bit.ly/3oGOCc8"
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute top-4 left-4 flex justify-center items-center w-12 h-12">
        <img
          src="https://bit.ly/2W3Xr3h"
          alt=""
          className="w-12 h-12 rounded-full ring-0 ring-offset-4 ring-offset-blue-500 object-cover"
        />
      </div>
    </div>
  );
};
export default Stories;
