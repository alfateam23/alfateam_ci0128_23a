import React, { useState, useEffect } from 'react';

/**
 * Component to show the title for the availability page
 */
export const Availability_title = () => {
  return (
    <div className="w-1/2 float-left mt-[3%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Cupo Total</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
    </div>
  );
};

/**
 * Title for the user to select how many people is coming with
 * him
 */
export const Party_title = ({UserData}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-1/2 clear-left mt-[15%] mb-[10%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Cuántos lo acompañan?</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
      <br/>
      <div className="ml-20 bg-gray-200 w-1/2
      py-2 pl-3">
        <p className="text-lg inline-block">Persona(s)</p>
        <div className='inline-block ml-28'>
          <button className='inline-block bg-gray-400 rounded-2xl
          w-6' onClick={() => count > 0 ? setCount((prevCount) => 
            prevCount-1) : setCount(0)}>-</button>
          <p className='inline-block ml-5 text-lg bg-white w-7 text-center
          shadow-[0px_1px_2px_0px_rgba(0,0,0,0.50)_inset]'>{count}</p>
          <button className='inline-block ml-5 bg-gray-400 rounded-2xl
          w-6'onClick={() => count > 39 ? 
            alert("No puede traer a tantas personas") : setCount((prevCount) => 
            prevCount+1)}>+</button>
          <p className='hidden'>{UserData.num_guests=count}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Component that will eventually receive the total amount of space left
 * as a parameter and display it.
 */
export const Spaces_left = ({quantity}) => {
  return (
    <div className="w-1/2 float-left mt-[1%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">{quantity} espacios restantes</p>
    </div>
  );
};