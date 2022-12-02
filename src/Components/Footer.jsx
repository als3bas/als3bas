import PropTypes from 'prop-types';
import FooterCard from './FooterCard';

function Footer() {
  return (
    <div className="mx-auto max-w-7xl py-4 px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <FooterCard title="Sobre Mi">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3">
              <ul className="">
                <li>
                  Álvaro, 26 Años, Chile
                </li>
                <li>
                  Desarrollador de Software
                </li>
                <li>
                  Técnico Universitario en Informática UTFSM
                </li>
                <li>
                  NodeJS Backend Developer desde 2019
                </li>
              </ul>
            </div>

          </div>
        </FooterCard>
        <FooterCard title="Otros">
          <ul className="others">
            <li>
              <a href="https://github.com/sebalvaro/zsh-personal-config" target="_blank" rel="noreferrer">
                Zsh Custom Config
              </a>
            </li>
          </ul>
        </FooterCard>
        <FooterCard title="Contacto y Redes Sociales">
          <ul className="">
            <li>
              <a href="https://github.com/sebalvaro" target="_blank" rel="noreferrer">💻 Github</a>
            </li>
            <li>
              <a href="mailto:hola@asgg.cl" rel="noreferrer">✉️ Correo: hola[at]asgg.cl</a>
            </li>
            <li>
              <a href="https://instagram.com/_sebalvaro" target="_blank" rel="noreferrer">📸 Instagram @sebalvaro_</a>
            </li>
          </ul>
        </FooterCard>
      </div>

      <div className="pt-8">
        <p className="text-center text-xs">
          Creado con ❤️ por
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
