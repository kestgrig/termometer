/* eslint-disable react/prop-types */

import style from "../increase/Increase.module.css"

export function Increase (props)  {
  const {onClick} = props;

  return (
    <button className={style.plus} onClick={onClick} type="button">
      +
    </button>
  );
};

