import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total() > 0 ? (
    <div>
      <p className={s.good}>Good:{good}</p>
      <p className={s.neutral}>Neutral:{neutral}</p>
      <p className={s.bad}>Bad:{bad}</p>
      <p>Total:{total()}</p>
      <p>Positive feedback: {positivePercentage()}</p>
    </div>
  ) : (
    <p>No feedback given</p>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
