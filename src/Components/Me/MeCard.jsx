import PropTypes from 'prop-types';

function MeCard({ children, title }) {
  return (
    <div className="pb-10">
      <h1 className="font-bold text-xl uppercase text-center text-white text-opacity-60">
        {title}
      </h1>
      <hr className="invisible my-3" />
      {children}
    </div>
  );
}

MeCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default MeCard;
