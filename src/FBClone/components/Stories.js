import React from 'react';

const Stories = () => {
  return (
    <>
      <div className="flex justify-between md:mx-auto md:w-2/5 px-3 text-gray-700 bg-white text-md">
        <div>Stories</div>
        <div className="text-purple-400">Your archive</div>
      </div>
      <div className="overflow-x-scroll py-2 pl-3 md:mx-auto md:w-2/5 mb-3 w-screen bg-white scroller-snap">
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
    <div className="relative w-32 h-64 rounded-xl shadow-md scroll-item">
      <img
        src="https://bit.ly/3oGOCc8"
        alt=""
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="flex absolute top-4 left-4 justify-center items-center w-12 h-12">
        <img
          src="https://bit.ly/2W3Xr3h"
          alt=""
          className="object-cover w-12 h-12 rounded-full ring-0 ring-offset-4 ring-offset-blue-500"
        />
      </div>
    </div>
  );
};
export default Stories;
