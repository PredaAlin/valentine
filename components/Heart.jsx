import React from 'react';

const Heart = ({image}) => {
  return (
    <div className='mt-6 flex items-center justify-center'>
      <div
        style={{
          backgroundImage: `url('/heart1.svg')`,
          backgroundSize: "cover",
          width: "60%",
          height: "550px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <img src={image} alt="" width="50%" height="50%" className='mb-20 mr-16' />
      </div>
    </div>
  );
}

export default Heart;
