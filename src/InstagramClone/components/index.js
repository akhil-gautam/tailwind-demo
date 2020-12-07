import React from 'react';

import Header from './Header';
import Footer from './Footer';
import IGPost from './Post';

export default () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <section className="flex flex-col items-center h-full mt-16 overflow-y-scroll space-y-6">
        <IGPost imgURL="https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <IGPost imgURL="https://images.pexels.com/photos/3662134/pexels-photo-3662134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <IGPost imgURL="https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <IGPost imgURL="https://images.pexels.com/photos/3662134/pexels-photo-3662134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </section>
      <Footer />
    </div>
  );
};
