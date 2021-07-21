import React from 'react';

import github from '~/images/icons8-github-sm.gif';
import linkedin from '~/images/icons8-linkedin-sm.gif';
import instagram from '~/images/icons8-instagram-sm.gif';

import { footerText, socialLinks, socialIcon } from './footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <p className={footerText}>
        This website does not storage any kind of cookie
      </p>
      <p className={footerText}>Social media of Countrypedia creator</p>
      <nav className={socialLinks}>
        <a
          href="https://github.com/ericvasconcelos"
          target="_blank"
          rel="noreferrer"
          className={socialIcon}
        >
          <img src={github} alt="GitHub" width="200" height="200" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-vasconcelos/"
          target="_blank"
          rel="noreferrer"
          className={socialIcon}
        >
          <img src={linkedin} alt="Linkedin" width="72" height="72" />
        </a>
        <a
          href="https://www.instagram.com/ericvdeoliveira/"
          target="_blank"
          rel="noreferrer"
          className={socialIcon}
        >
          <img src={instagram} alt="Instagram" width="200" height="200" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
