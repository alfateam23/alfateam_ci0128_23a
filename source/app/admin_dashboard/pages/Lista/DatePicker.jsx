import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      placeholderText='Filtro por fecha'
      onChange={onChange}
    />
  );
}

export default DatePickerComponent;