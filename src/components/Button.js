import PropTypes from 'prop-types';

export const Button = ({ color, text, onClick }) => (
  <button type="button" onClick={onClick} style={{ backgroundColor: color }} className="btn">
    {text}
  </button>
);

Button.defaultProps = {
  color: 'grey',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
