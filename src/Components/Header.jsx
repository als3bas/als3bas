import PropTypes from 'prop-types';

function Header({ children, title, subtitle }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 mx-auto max-w-7xl py-6 px-4 tracking-tight">
      <div className="font-bold">
        <h1 className="text-3xl">{title}</h1>
        <span className="text-md">{subtitle}</span>
      </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
