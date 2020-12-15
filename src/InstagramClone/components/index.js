import React from 'react';

import Header from './Header';
import Footer from './Footer';
import IGPost from './Post';
import Stories from './Stories';

export const Main = () => {
  return (
    <div className="flex overflow-x-hidden flex-col items-center w-full">
      <Header />
      <Stories />
      <section className="flex overflow-y-scroll flex-col items-center space-y-6 h-full">
        <IGPost imgURL="https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <IGPost imgURL="https://images.pexels.com/photos/3662134/pexels-photo-3662134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <IGPost imgURL="https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <IGPost imgURL="https://images.pexels.com/photos/3662134/pexels-photo-3662134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
