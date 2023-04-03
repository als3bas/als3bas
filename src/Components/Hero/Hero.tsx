import { type HeroProps } from '../../Types/Hero';

function Introduction({ info }: HeroProps) {
  return (
    <div>
      <div className="hero relative">
        <div className="hero:before absolute" />
        <div className="hero-text">
          <p className="text-5xl font-bold mb-4 glitch">
            <span aria-hidden="true">{info.name}</span>
            {info.name}
            <span aria-hidden="true">{info.name}</span>
          </p>
          <div className="text-xl text-white text-opacity-60">
            <p className="italic">
              {`${info.job.position} at ${info.job.where}`}
            </p>
            <p className="italic text-sm">{info.education.title}</p>
            <p className="font-bold text-sm">{info.education.institution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
