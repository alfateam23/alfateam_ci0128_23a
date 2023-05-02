import React, { useState, useEffect } from 'react';

export const Availability_title = () => {
  return (
    <div className="w-1/2 float-left mt-[3%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Availability</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
    </div>
  );
};

export const Party_title = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-1/2 clear-left mt-[15%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">How big is your party?</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
      <br/>
      <div className="ml-20 bg-gray-200 w-1/2
      py-2 pl-3">
        <p className="text-lg inline-block">Person(s)</p>
        <div className='inline-block ml-28'>
          <button className='inline-block bg-gray-400 rounded-2xl
          w-6' onClick={() => count > 0 ? setCount((prevCount) => 
            prevCount-1) : setCount(0)}>-</button>
          <p className='inline-block ml-5 text-lg bg-white w-7 text-center
          shadow-[0px_1px_2px_0px_rgba(0,0,0,0.50)_inset]'>{count}</p>
          <button className='inline-block ml-5 bg-gray-400 rounded-2xl
          w-6'onClick={() => count > 39 ? 
            alert("You can't bring that many people") : setCount((prevCount) => 
            prevCount+1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export const Spaces_left = ({quantity}) => {
  return (
    <div className="w-1/2 float-left mt-[1%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">{quantity} spaces left</p>
    </div>
  );
};