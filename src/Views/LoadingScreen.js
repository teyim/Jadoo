import React from 'react';
import { CgUserlane } from 'react-icons/cg'

function LoadingScreen() {
  return <div className='bg-blue-700 w-screen h-screen flex justify-center items-center'>
   <CgUserlane className=' animate-pulse w-20 h-20 text-white'></CgUserlane>
  </div>;
}

export default LoadingScreen;
