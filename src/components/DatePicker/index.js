import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import calendar from "../../assets/svg/calendar.svg";
import Clock from "../../assets/svg/clockIcon.svg";
import classes from "./styles.module.scss";

const DatePicker = (props) => {
  const {
    value,
    placeholderText,
    onChange,
    format,
    disabled = false,
    placeHolder = false,
    maxDate = null,
    minDate = null,
    isTimer = false,
    isWeekdays = false,
    removeMargin = false,
  } = props;
  const calendarRef = useRef(false)
  
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleClick = () => {
    calendarRef.current.setOpen({ open: true })
  }
  return (
    <div className={`row ${classes.containerStyle} ${disabled && classes.disabledInput} ${removeMargin && classes.removeContainerMargin}`}>
      <div className="col-10">
        <ReactDatePicker
          value={value}
          selected={isTimer ? null : (value ? new Date(value) : null)}
          disabled={disabled}
          maxDate={maxDate}
          showTimeSelectOnly={isTimer}
          showTimeSelect={isTimer}
          minDate={minDate}
          filterDate={isWeekdays === true ? isWeekday : null}
          dropdownMode="select"
          className={`${classes.inputBoxStyle} ${disabled && classes.disabledInput} ${placeHolder && classes.placeHolderStyle} ${removeMargin && classes.removeMargin}`}
          placeholderText={placeholderText}
          dateFormat={format}
          onChange={onChange}
          ref={calendarRef}
        />
      </div>
      <div className="col-2">
        <img
          className={`${classes.calender} ${removeMargin && classes.calendarIcon} cursor-pointer`}
          src={isTimer ? Clock : calendar}
          alt="calender"
          onClick={() => handleClick()}
        />
      </div>
    </div >
  );
};

export default DatePicker;