import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <div className={s.wrap}>
      <p className={s.text}>
        Good:<span className={s.value}>{good}</span>
      </p>
      <p className={s.text}>
        Neutral:<span className={s.value}>{neutral}</span>
      </p>
      <p className={s.text}>
        Bad:<span className={s.value}>{bad}</span>
      </p>
      <p className={s.text}>
        Total:<span className={s.value}>{totalFeedback}</span>
      </p>
      <p className={s.text}>
        Positive feedback:
        <span className={s.value}>{positiveFeedbackPercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
