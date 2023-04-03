import { type MeCardProps } from '../../Types/MeCard';

function MeCard({ children, title }: MeCardProps) {
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

export default MeCard;
