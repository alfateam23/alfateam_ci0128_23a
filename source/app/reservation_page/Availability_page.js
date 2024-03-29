import React, { useState, useEffect } from 'react';
import { getAvailability, updateCapacityValue } from './HelperFunctions';

/**
 * Component to show the title for the availability page
*/
export const Availability_title = () => {
  return (
    <div className="flex flex-col mt-10 w-1/2">
      <p className="font-lexend text-center text-2xl">
        Cupo Total
      </p>
      <hr className="bg-black h-0.5 w-full"/>
    </div>
  );
};

/**
 * Component that will eventually receive the total amount of space left
 * as a parameter and display it.
 */
export const Spaces_left = ({count, userData}) => {
  const [datesCapacity,setDatesCapacity] = useState(null);
  const [prevCount, setPrevCount] = useState(0);
  useEffect(() => {
    getAvailability(userData, setDatesCapacity);
  }, []);
  useEffect(()=>{
    updateCapacityValue(prevCount,count,
      datesCapacity, setDatesCapacity);
    setPrevCount(count);
  },[count])
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4`}>
      {!datesCapacity ?
      "Loading..." :
      datesCapacity.map((item) => (
      <div key={item.Fecha}>
        <p className='bg-white px-5 py-3 rounded-2xl rounded-b-none'>{(new Date(item.Fecha)).toDateString()}</p>
        <p className='text-center bg-gray-300 py-2 rounded-2xl rounded-t-none'>{item.CupoOnlineDia}</p>
      </div>
      ))}
    </div>
  );
};

/**
 * Title for the user to select how many people is coming with
 * him
 */
export const Party_title = ({count, setCount, UserData}) => {

  useEffect(()=>{
    UserData.totalPeople = count + 1;
  },[count])

  return (
    <div className="flex flex-col lg:w-1/2 sm:w-1/2 w-80">
      <p className="font-lexend text-2xl text-center">
        ¿Cuántos lo acompañan?
      </p>
      <hr className="bg-black h-0.5"/>
      <div className="flex flex-row justify-center items-center
      my-10">
        <p className="text-xl inline-block">
          Persona(s)
        </p>
        <div className='inline-block ml-10'>
          <button className='inline-block bg-gray-400 rounded-2xl
          w-6' onClick={() => count > 0 ? setCount((prevCount) => 
            prevCount-1) : setCount(0)}>
              -
          </button>
          <p className='inline-block ml-5 text-lg bg-white w-7 text-center
          shadow-[0px_1px_2px_0px_rgba(0,0,0,0.50)_inset]'>
            {count}
          </p>
          <button className='inline-block ml-5 bg-gray-400 rounded-2xl
          w-6'onClick={() => count > 39 ? 
            alert("No puede traer a tantas personas") : setCount((prevCount) => 
            prevCount+1)}>
              +
          </button>
        </div>
      </div>
    </div>
  );
};
