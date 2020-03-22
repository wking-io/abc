import React from 'react';

import Link from './link';

const Footer = () => (
  <footer className="bg-black text-white pt-32 pb-16">
    <div>Logo here</div>
    <nav>
      <ul className="flex flex-wrap items-center justify-center">
        <li className="border-r-2 border-white">
          <Link className="px-6 py-0 m-0 leading-none block hover:text-primary" to="tel:205-482-5045">
            205-482-5045
          </Link>
        </li>
        <li className="border-r-2 border-white">
          <p className="px-6 py-0 m-0 leading-none block">PO Box 85, Hoover, Alabama 35243</p>
        </li>
        <li className="border-r-2 border-white">
          <Link className="px-6 py-0 m-0 leading-none block hover:text-primary" to="mailto:info@abconsulting.net">
            info@abconsulting.net
          </Link>
        </li>
        <li className="border-r-2 border-white">
          <Link className="px-6 py-0 m-0 leading-none block hover:text-primary" to="https://google.com">
            Instagram
          </Link>
        </li>
        <li className="">
          <Link className="px-6 py-0 m-0 leading-none block hover:text-primary" to="https://google.com">
            Facebook
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
