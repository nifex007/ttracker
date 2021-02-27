import PropTypes from 'prop-types';
import AddButton from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Clicked');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <AddButton color="green" text="+" onClick={onClick} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
