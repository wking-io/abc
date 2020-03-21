import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import { Menu, MenuList, MenuButton, MenuLink } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';

import { LogoIcon, LogoName } from './icons';
import { useElBottom } from '../utils';

const Header = () => {
  const menuRef = useRef(null);
  const [ showSticky, updateShowSticky ] = useState(false);
  useElBottom((pos) => {
    updateShowSticky(pos <= 0)
  }, [], menuRef);
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <header ref={menuRef} className={`sticky-menu z-20 fixed flex items-center justify-between w-full py-3 px-16 bg-dark-o ${showSticky ? 'sticky-menu--show' : ''}`}>
            <Link className="block relative z-50 flex items-center" to="/">
              <LogoIcon className="h-6 w-auto mr-4 text-primary" />
              <LogoName className="h-4 w-auto text-white" />
            </Link>
            <MenuButton className="p-4 -mr-4 relative z-50">
              <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
              <span className={`hamburger`} aria-hidden>
                <span />
                <span />
              </span>
            </MenuButton>
          </header>
          <header ref={menuRef} className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between w-full pt-24 px-16">
            <p class="text-primary font-bold">205-482-5045</p>
            <Link className="block relative z-50 flex flex-col items-center" to="/">
              <LogoIcon className="h-8 w-auto text-primary" />
              <LogoName className="h-6 w-auto text-white mt-6" />
            </Link>
            <MenuButton className="p-4 -mr-4 relative z-50">
              <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
              <span className={`hamburger`} aria-hidden>
                <span />
                <span />
              </span>
            </MenuButton>
          </header>
          <nav className="">
            <MenuList className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-start items-end p-8 md:p-16">
              <MenuButton className="p-4 top-0 right-0 m-4 absolute">
                <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
                <span className={`hamburger`} aria-hidden>
                  <span />
                  <span />
                </span>
              </MenuButton>
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
        </>
      )}
    </Menu>
  );
};

export default Header;
