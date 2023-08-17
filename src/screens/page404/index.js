import React from 'react';
import Lottie from "lottie-react";
import assets from '../../assets'
import './styles.scss'

const Page404 = () => {
  return (
    <div className='page404-container'>
      <Lottie 
        className='lottie-page404'
        animationData={assets.Lottie.page404} 
        loop={true} />
    </div>
  );
};

export default Page404;