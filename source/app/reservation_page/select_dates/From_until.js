import React from 'react';
import { IconName } from "react-icons/";
import { CiCalendar } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Link,
 useNavigate } from 'react-router-dom';

/**
  * Component to handle what the From div will contain
  * If the user has already selected a date then it will
  * show the date, if not it will show the text
  */
const From_fill = ({date, handleClick}) => {
  if (date !== (new Date()).toDateString()) {
    return (
      <From_fill_date date={date} />
    );
  }
  return (
    <From_fill_text handleClick={handleClick}/>
  );
};

/**
  * Component to handle what the until div will contain
  * If the user has already selected a date then it will
  * show the date, if not it will show the text
  */
const Until_fill = ({date, handleClick}) => {
  if (date !== (new Date()).toDateString()) {
    return (
      <Until_fill_date date={date} />
    );
  }
  return (
    <Until_fill_text handleClick={handleClick}/>
  );
};

/**
 * Component to show the from text
 */
const From_fill_text = ({handleClick}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pr-16">Desde</p>
      <button id='from' onClick={handleClick} className='mr-5'>
        <CiCalendar size="1.4rem" className='inline-block'/>
      </button>
    </div>
  );
};

/**
 * Component to show the from date
 */
const From_fill_date = ({date}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pr-5 text-sm">{date}</p>
    </div>
  );
};

/**
 * Component to show the until text
 */
const Until_fill_text = ({handleClick}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pr-16 ml-5">Hasta</p>
      <button id='until' onClick={handleClick}>
        <CiCalendar size="1.4rem" className='inline-block'/>
      </button>
    </div>
  );
};

/**
 * Component to show the until date
 */
const Until_fill_date = ({date}) => {
  return (
    <div className='inline-block'>
      <p className= "inline-block pl-5 text-sm">{date}</p>
    </div>
  );
};

/**
 * Component for the from_until rectangle which calls the
 * from and until fills.
 */
export const From_until = ({handleClick, date_from, date_until}) => {
  return (
    <div className="shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]
    bg-white py-4
    divide-x divide-slate-400 hidden
    flex justify-center max-w-[25rem] mx-auto w-full">
      <From_fill date={date_from} handleClick={handleClick}/>
      <Until_fill date={date_until} handleClick={handleClick}/>
    </div>
  );
};