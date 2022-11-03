import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <h1 className="mx-auto max-w-7xl py-6 px-4 text-3xl font-bold tracking-tight text-gray-900">
      {children}
    </h1>

  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
