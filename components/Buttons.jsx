"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Buttons = () => {
  const router = useRouter();
  const defaultPosition = {
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
   

  };

  const [buttonStyle, setButtonStyle] = useState(
    defaultPosition
  );

 

  const changeButtonPosition = () => {
    const randomPosition = {
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      transform: 'translate(-50%, -50%)',
    };

    setButtonStyle(randomPosition);
  };

  const goToSuccesPage = () => {
    router.push('/succes');
  };

  const handleNuButtonClick = () => {
    // Change the button position when 'Nu' button is clicked
    changeButtonPosition();

    // You can perform other actions associated with the 'Nu' button click here
  };

  useEffect(() => {
    // Reset the position when the component mounts
    setButtonStyle(defaultPosition);

 
  }, []); // Run only once on component mount

  return (
    <div className="flex justify-between px-16 relative">
      <button onClick={goToSuccesPage} className="bg-purple-500 rounded-lg text-3xl font-serif font-semibold p-3 shadow-xl text-center">
        Da
      </button>
      <button
        onClick={handleNuButtonClick} // Call function when 'Nu' button is clicked
        style={buttonStyle}
        className="bg-purple-500 rounded-lg text-3xl font-serif font-semibold p-3 shadow-xl text-center"
      >
        Nu
      </button>
    </div>
  );
};

export default Buttons;
