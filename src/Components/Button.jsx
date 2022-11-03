import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <div className="rounded-md shadow">
      <button
        type="button"
        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
