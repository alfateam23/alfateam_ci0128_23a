import React, {useState} from "react";
import {
  LocalizationProvider,
  DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { InsertIDPage } from "./ServiceUtil/InsertIDPage";

export const Service = () => {
  // page = 1 first page, page = 2 second page
  const [page, setPage] = useState(0);

  return (
    <div>
      {page === 0 ? <InsertIDPage setPage={setPage}/> :
      <SecondPage/>}
    </div>
  );
};

export const SecondPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Basic date time picker" />
      </LocalizationProvider>
    </div>
  );
};
