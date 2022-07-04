import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => {
        return (
          <li className={s.item} key={option}>
            <button className={s.btn} type="button" onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
