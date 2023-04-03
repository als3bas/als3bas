import { Grid } from '@mui/material';
import { type MeProps } from '../../Types/MeCard';
import MeCard from './MeCard';

function Me({ info, learning, skills }: MeProps) {
  return (
    <>
      <h1 className="text-4xl py-10 font-bold text-center uppercase">
        About Me
      </h1>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MeCard title="Who Am i?">
            <ul>
              <li>{`${info.name} - ${info.age}`}</li>
              <li>{info.education.title}</li>
              <li>{info.education.institution}</li>
              <li>{`${info.job.position} at ${info.job.where}`}</li>
              <li>{`Email ${info.email}`}</li>
            </ul>
          </MeCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MeCard title="Hobbies">
            {info.hobbies.map((h) => (
              <li key={h.name}>{`${h.icon} ${h.name}`}</li>
            ))}
          </MeCard>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MeCard title="Skills">
            <ul className="lg:columns-3 md:columns-3 sm:columns-2 text-sm">
              {skills.map((s) => (
                <li key={s}>
                  🔸
                  {s}
                </li>
              ))}
            </ul>
          </MeCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MeCard title="Learning">
            <ul className="lg:columns-3 md:columns-3 sm:columns-2 text-sm">
              {learning.map((l) => (
                <li key={l}>
                  🔹
                  {l}
                </li>
              ))}
            </ul>
          </MeCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Me;
