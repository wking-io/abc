import { Link } from 'gatsby';
import React from 'react';
import { Menu, MenuList, MenuButton, MenuLink } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';

import { Image } from './images';

const Header = () => {
  return (
    <header className="flex items-center w-full px-8 md:px-16 pt-2 md:pt-8 pb-4 bg-white">
      <Link className="block relative z-50" to="/">
        <Image image="logo" className="w-24 md:w-40 block" imgStyle={{ width: '100%', height: 'auto' }} />
      </Link>
      <Menu>
        {({ isOpen }) => (
          <nav className="flex-1 text-right">
            <MenuButton className="p-4 -mr-4 relative z-50">
              <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
              <span className={`hamburger`} aria-hidden>
                <span />
                <span />
              </span>
            </MenuButton>
            <MenuList className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-start items-end p-8 md:p-16">
              <MenuLink href="#about" className="font-bold text-lg hover:text-primary p-4 inline-block">
                About
              </MenuLink>
              <MenuLink href="#mission" className="font-bold text-lg hover:text-primary p-4 inline-block">
                Mission
              </MenuLink>
              <MenuLink href="#connect" className="font-bold text-lg hover:text-primary p-4 inline-block">
                Connect
              </MenuLink>
              <MenuLink href="https://instagram.com" className="font-bold text-lg hover:text-primary p-4 inline-block">
                Instagram
              </MenuLink>
              <MenuLink href="https://facebook.com" className="font-bold text-lg hover:text-primary p-4 inline-block">
                Facebook
              </MenuLink>
            </MenuList>
          </nav>
        )}
      </Menu>
    </header>
  );
};

export default Header;
