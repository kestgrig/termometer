/* eslint-disable react/prop-types */

import style from "../decrease/Decrease.module.css"

export function Decrease (props)  {
  const {onClick} = props;

  return (
    <button className={style.minus} onClick={onClick} type="button">
      -
    </button>
  );
};

