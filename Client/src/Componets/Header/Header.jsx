import React, { useContext, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../Context/AutheContext.jsx';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctor', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyHeader);
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='w-[45px] h-[35px] rounded-full'>
            <img
              src="https://i.pinimg.com/564x/ac/e3/f2/ace3f270ef08d214d71b2765e33a41b4.jpg"
              className="w-full rounded-full"
              alt="Logo"
            />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef}>
            <ul className='flex menu items-center gap-[3.7rem] p-5'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[800]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className='flex items-center gap-4'>
            {token && user ? (
              <Link to={role === 'doctor' ? '/doctor/profile/me' : '/user/profile/me'}>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src="https://i.pinimg.com/736x/38/1e/a1/381ea10b58acf1cd2610195f960bb04e.jpg"
                  // {user?.photo}
                   className='w-full rounded-full' alt="" />
                </figure>
              </Link>
            ) : (
              <Link to="/login">
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  LOGIN
                </button>
              </Link>
            )}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
