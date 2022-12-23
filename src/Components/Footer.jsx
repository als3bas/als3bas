import FooterCard from './FooterCard';
import data from '../data.json';

const {
  skills, learning, links, info,
} = data;

function Footer() {
  return (
    <div className="mx-auto max-w-7xl py-4 px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        <FooterCard title="Skills">
          <p className="pb-2">
            This doesn&apos;t mean I&apos;m an expert in all of them,
            but I have some experience with them.
          </p>
          <ul className="skills columns-4">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </FooterCard>
        <FooterCard title="Learning and/or interested">
          <p className="pb-2">
            I&apos;m currently learning these technologies,
            and/or I&apos;m interested in learning more about them.
          </p>
          <ul className="learning columns-4">
            {learning.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </FooterCard>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <FooterCard title="About me">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3">
              <ul className="">
                <li>
                  {`🧑🏽 ${info.name} ${info.age}`}
                </li>
                <li>
                  {`💻 ${info.job.position} from ${info.job.where}`}
                </li>
                <li>
                  <a
                    href="https://usm.cl/en/2022-admission-process/careers/university-technician-in-computer-science/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`🧑🏽‍🎓 ${info.education.title} - ${info.education.institution}`}
                  </a>
                </li>
              </ul>

              <h2 className="text-l font-bold pt-3"> Hobbies </h2>
              <ul>
                {info.hobbies.map((h) => (
                  <li key={h.name}>{`${h.icon} ${h.name}`}</li>
                ))}
              </ul>
            </div>

          </div>
        </FooterCard>
        <FooterCard title="Personal Stuff">
          <ul className="others">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </FooterCard>
        <FooterCard title="Social networks">
          <ul className="">
            <li>
              <a href="https://www.whakoom.com/sebalvaro" target="_blank" rel="noreferrer">
                📚 My Whakoom Profile
              </a>
            </li>
            <li>
              <a href="https://github.com/sebalvaro" target="_blank" rel="noreferrer">🐙 My Github</a>
            </li>
            <li>
              <a href="https://instagram.com/_sebalvaro" target="_blank" rel="noreferrer">📸 IG @sebalvaro_</a>
            </li>
            <li>
              <a href="https://www.last.fm/user/mellamoarbaro">
                🎵 My Last.fm Profile
              </a>
            </li>
          </ul>
        </FooterCard>
      </div>

      <div className="pt-8">
        <p className="text-center text-xs">
          Created with ❤️ by
          {' '}
          <a href="https://instagram.com/_sebalvaro" target="_blank" rel="noreferrer">
            @sebalvaro_
          </a>
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  // children: PropTypes.node.isRequired,
};

export default Footer;
