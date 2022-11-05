import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button
      type="button"
      className=" border-slate-300 px-8 text-gray-500 hover:text-white hover:bg-slate-600 mx-1 md:py-4"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
