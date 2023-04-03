import { Container } from '@mui/material';
import {
  TimeLine, Hero, Footer, Me,
} from './Components';

import {
  timeline, info, learning, skills, links,
} from './data.json';

function App() {
  return (
    <>
      <Hero
        info={info}
      />

      <Container maxWidth="md">
        <Me
          info={info}
          learning={learning}
          skills={skills}
        />
      </Container>

      {/* TimeLine  */}
      <Container maxWidth="md">
        <TimeLine timeline={timeline} />
      </Container>

      <Container maxWidth="md">
        <Footer links={links} />
      </Container>
    </>
  );
}

export default App;
