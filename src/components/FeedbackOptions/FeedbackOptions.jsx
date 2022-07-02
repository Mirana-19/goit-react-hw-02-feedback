import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className={s.btnContainer}>
      {options.map(name => {
        return (
          <button
            key={name}
            className={s.button}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
