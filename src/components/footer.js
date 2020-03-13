import React from 'react';

import { Image } from './images';
import Link from './link';

const Footer = () => (
  <footer className="bg-black pt-32 pb-16">
    <div>Logo here</div>
    <nav>
      <ul className="flex items-center justify-center">
        <li className="border-r border-white">
          <Link className="px-6" to="tel:205-482-5045">
            205-482-5045
          </Link>
        </li>
        <li>
          <p className="px-6">PO Box 85, Hoover, Alabama 35243</p>
        </li>
        <li className="border-r border-white">
          <Link className="px-6" to="mailto:info@abconsulting.net">
            info@abconsulting.net
          </Link>
        </li>
        <li className="border-r border-white">
          <Link className="px-6" to="https://google.com">
            Instagram
          </Link>
        </li>
        <li className="">
          <Link className="px-6" to="https://google.com">
            Facebook
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
