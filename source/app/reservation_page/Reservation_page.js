import React from 'react';

const Select_dates = () => {
  return (
    <div className="w-1/2 float-left mt-[3%]">
      <p className="font-lexend text-2xl
      ml-20 mt-0.5">Select dates</p>
      <hr className="ml-10 mr-24 bg-black h-0.5"/>
    </div>
  );
};

const Next = () => {
  return (
    <footer className="bottom-0 absolute w-full">
      <button className="font-sans bg-YellowButton float-right
      mr-[20%] mb-[5%] px-8 py-2 shadow-lg">
        Next
      </button>
    </footer>
  );
};

const Reservation_type = () => {
  return (
    <div className="w-1/2 float-left mt-[4%]">
      <div className="bg-blueNormal w-80 ml-[30%]">
        <button className="font-sans text-white text-sm rounded-none
        bg-blueNormal p-4 w-80 hover:bg-bluePressed
        active:shadow-[0px_0px_14px_0px_rgba(0,0,0,0.50)_inset]">
          Parcel
        </button>
        <hr className="bg-white w-48 ml-[21%]"/>
        <button className="font-sans text-white text-sm rounded-none
        bg-blueNormal p-4 w-80 mt-[0.05px]
        hover:bg-bluePressed
        active:shadow-[0px_0px_14px_0px_rgba(0,0,0,0.50)_inset]">
          Kayak Booking
        </button>
      </div>
    </div>
  );
};

export const Page = () => {
  return (
    <div>
      <Select_dates />
      <Reservation_type />
      <Next />
    </div>
  );
};