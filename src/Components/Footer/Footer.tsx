import { Grid } from '@mui/material';
import MeCard from '../Me/MeCard';
import { type Links, type LinksProps } from '../../Types/Links';

const listData = (data: Links[]) => (
  <ul className="capitalize">
    {data.map((l) => (
      <li key={l.name} className="hover:text-amber-500">
        <a
          target="_blank"
          href={l.url}
          rel="noreferrer"
        >{`${l.emoji} ${l.name}`}</a>
      </li>
    ))}
  </ul>
);

function Footer({ links }: LinksProps) {
  return (
    <>
      <div className="py-10">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MeCard title="Social Networks">
              {listData(links.social_networks)}
            </MeCard>
          </Grid>
          <Grid item xs={6}>
            <MeCard title="Personal Stuff">
              {listData(links.personal_stuff)}
            </MeCard>
          </Grid>
        </Grid>
      </div>

      <div className="text-center py-10 text-xs text-white text-opacity-60">
        Created with ❤️ by{' '}
        <a
          target="_blank"
          href="//github.com/als3bas"
          className="underline"
          rel="noreferrer"
        >
          @als3bas
        </a>
      </div>
    </>
  );
}

export default Footer;
