/* eslint-disable react/prop-types */

import style from "../temperature/Temperature.module.css"

export function Temperature (props) {
  const {temperature} = props;
  const bubbleClass = temperature > 0 ? style.red : style.blue;

  return (
    <div className={`${style.bubble} ${bubbleClass}`}>
      {temperature}°C
    </div>
  );
};

