import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import { Menu, MenuList, MenuButton, MenuLink } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';

import { LogoIcon, LogoName } from './icons';
import { useElBottom } from '../utils';

const Header = ({ light }) => {
  const menuRef = useRef(null);
  const [ showSticky, updateShowSticky ] = useState(false);
  useElBottom((pos) => {
    updateShowSticky(pos <= 0)
  }, [], menuRef);
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <header ref={menuRef} className={`sticky-menu z-40 fixed flex items-center justify-between left-0 w-full py-1 px-6 md:px-16 bg-dark-o ${showSticky ? 'sticky-menu--show' : ''}`}>
            <Link className="block relative z-50 flex items-center" to="/">
              <LogoIcon className="h-6 w-auto mr-4 text-primary" />
              <LogoName className="h-4 w-auto text-white" />
            </Link>
            <MenuButton className="p-4 -mr-4 relative z-50 hover:outline-none focus:outline-none">
              <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
              <span className={`hamburger`} aria-hidden>
                <span />
                <span />
              </span>
            </MenuButton>
          </header>
          <header ref={menuRef} className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between w-full pt-4 md:pt-16 lg:pt-24 px-6 md:px-16">
            <p className="hidden md:block flex-1 text-primary font-bold">205-482-5045</p>
            <Link className="main-logo block relative z-50 flex md:flex-col items-center" to="/">
              <LogoIcon className="h-6 md:h-8 w-auto text-primary mr-4 md:mr-0" />
              <LogoName className={`h-4 md:h-6 w-auto ${light ? 'text-black' : 'text-white'} md:mt-6`} />
            </Link>
            <div className="flex-1 flex justify-end">
              <MenuButton className="p-4 -mr-4 relative z-50 hover:outline-none focus:outline-none">
                <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
                <span className={`hamburger`} aria-hidden>
                  <span />
                  <span />
                </span>
              </MenuButton>
            </div>
          </header>
          <nav className="">
            <MenuList className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-start items-end pt-4 pb-8 md:pt-8 px-6 md:px-16">
              <div class="flex items-center justify-between w-full pb-12">
                <Link className="block relative z-50 flex items-center" to="/">
                  <LogoIcon className="h-6 w-auto mr-4 text-primary" />
                  <LogoName className="h-4 w-auto text-white" />
                </Link>
                <MenuButton className="p-4 -mr-4 hover:outline-none focus:outline-none">
                  <VisuallyHidden>{isOpen ? 'Close' : 'Open'} Menu</VisuallyHidden>
                  <span className={`hamburger`} aria-hidden>
                    <span />
                    <span />
                  </span>
                </MenuButton>
              </div>
              <MenuLink href="#about" className="font-bold text-3xl uppercase hover:text-primary focus:text-primary p-4 -mr-4 inline-block hover:outline-none focus:outline-none">
                About
              </MenuLink>
              <MenuLink href="#mission" className="font-bold text-3xl uppercase hover:text-primary focus:text-primary p-4 -mr-4 inline-block hover:outline-none focus:outline-none">
                Mission
              </MenuLink>
              <MenuLink href="#connect" className="font-bold text-3xl uppercase hover:text-primary focus:text-primary p-4 -mr-4 inline-block hover:outline-none focus:outline-none">
                Connect
              </MenuLink>
              <MenuLink href="https://www.instagram.com/easywithabc/" className="font-bold uppercase hover:text-primary focus:text-primary mt-6 p-1 -mr-1 inline-block hover:outline-none focus:outline-none">
                Instagram
              </MenuLink>
              <MenuLink href="https://www.facebook.com/ab-consulting-112665530382219" className="font-bold uppercase hover:text-primary focus:text-primary p-1 -mr-1 inline-block hover:outline-none focus:outline-none">
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
