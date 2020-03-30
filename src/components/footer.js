import React from 'react';

import Link from './link';
import { LogoIcon, LogoName } from './icons';

const Footer = () => (
  <footer className="bg-black text-white pt-16 md:pt-24 lg:pt-32 pb-16">
    <Link className="main-logo block relative z-50 flex flex-col items-center" to="/">
      <LogoIcon className="h-8 w-auto text-primary" />
      <LogoName className="h-6 w-auto text-white mt-6" />
    </Link>
    <nav className="mt-12">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="w-full mt-4 md:w-auto text-center md:border-r-2 md:border-white">
          <Link className="px-6 py-0 m-0 leading-none block hover:text-primary" to="tel:205-482-5045">
            205-482-5045
          </Link>
        </li>
        <li className="w-full md:w-auto text-center mt-4 md:border-r-2 md:border-white">
          <p className="px-6 py-0 m-0 leading-none block">PO Box 85, Hoover, Alabama 35243</p>
        </li>
        <li className="w-full md:w-auto text-center mt-4 lg:border-r-2 lg:border-white">
          <Link className="px-6 py-0 m-0 leading-none block hover:text-primary" to="mailto:info@abconsulting.net">
            info@easywithabc.com
          </Link>
        </li>
        <li className="mt-4 md:w-1/2 md:text-right lg:text-left lg:w-auto border-r-2 border-white">
          <Link
            className="px-6 py-0 m-0 leading-none block hover:text-primary"
            to="https://www.instagram.com/easywithabc/"
          >
            Instagram
          </Link>
        </li>
        <li className="mt-4 md:w-1/2 lg:w-auto">
          <Link
            className="px-6 py-0 m-0 leading-none block hover:text-primary"
            to="https://www.facebook.com/ab-consulting-112665530382219"
          >
            Facebook
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
