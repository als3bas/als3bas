import PropTypes from 'prop-types';

function FooterCard({ children, title }) {
  return (
    <div className="border shadow rounded-md p-3">
      <h1 className="text-xl font-bold pb-2">{title}</h1>
      <span className="text-sm">
        {children}
      </span>
    </div>
  );
}

FooterCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterCard;
