import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ReactDOM from 'react-dom';
import Score from 'react-score-indicator';
import PastReviews from './components/PastReviews';

const seller = () => {
  return (
    <div>
      <Header />
      <div className='mt-5 ml-4'>
        <p className='text-2xl font-semibold mb-3'>Hello Karan,</p>

        <p>Based on recent reviews this is your score...</p>
      </div>

      <div className='mt-5'>
        <Score
          value={78}
          maxValue={100}
          borderWidth={0}
          maxAngle={260}
          rotation={90}
          lineGap={0}
          lineWidth={50}
          colors={[
            '#d12000',
            '#ed8d00',
            '#f1bc00',
            '#84c42b',
            '#53b83a',
            '#3da940',
            '#3da940',
            '#3da940',
          ]}
        />
      </div>

      <div className='mx-4'>
        <p className='font-bold'>Some of the recent reviews...</p>

        <PastReviews />
      </div>

      <Footer />
    </div>
  );
};

export default seller;
