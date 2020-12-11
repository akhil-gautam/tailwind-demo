import React from 'react';

const URL = [
  'https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/5827389/pexels-photo-5827389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

const Stories = () => {
  return (
    <div className="flex md:justify-center mt-16 w-full bg-gray-50 border-b-2 overflow-x-scroll">
      <ul className="inline-flex py-2 px-4 space-x-4">
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[0]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[1]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[0]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[1]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[0]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[1]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[0]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[0]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[0]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[1]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[1]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
        <li className="h-16 w-16 flex justify-center items-center rounded-full bg-gradient-to-tr from-red-500 to-blue-500">
          <img
            src={URL[1]}
            alt=""
            className="rounded-full ring-0 ring-offset-2 h-14 w-14 object-cover"
          />
        </li>
      </ul>
    </div>
  );
};

export default Stories;
