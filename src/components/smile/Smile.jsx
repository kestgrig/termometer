/* eslint-disable react/prop-types */
import style from '../smile/Smile.module.css'

export function Smile(props) {
  const { temperature } = props;

  function smiley() {
    if (temperature < -10) {
      return `🥶 It's very cold!!!`;
    } else if (temperature >= -10 && temperature <= -1) {
      return `❄️☃️ It's cold!!!`;
    } else if (temperature > -1 && temperature <= 10) {
      return `🌬️ It's chilly!`;
    } else if (temperature > 10 && temperature <= 20) {
      return `😊 It's mild!`;
    } else if (temperature > 20 && temperature <= 30) {
      return `😎 It's warm!`;
    } else {
      return `🔥 It's hot!`;
    }
  }

  return (
    <span className={style.icon}>
      {smiley()} 
    </span>
  );
}