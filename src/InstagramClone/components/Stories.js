import React from 'react';

const URL = [
  'https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/5827389/pexels-photo-5827389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

const Stories = () => {
  return (
    <div className="flex overflow-x-scroll mt-16 w-full bg-gray-50 border-b-2 md:justify-center">
      <ul className="inline-flex py-2 px-4 space-x-4">
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[0]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[1]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[0]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[1]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[0]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[1]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[0]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[0]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[0]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[1]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[1]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
        <li className="flex justify-center items-center w-16 h-16 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full">
          <img
            src={URL[1]}
            alt=""
            className="object-cover w-14 h-14 rounded-full ring-0 ring-offset-2"
          />
        </li>
      </ul>
    </div>
  );
};

export default Stories;
