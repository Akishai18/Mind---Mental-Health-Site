import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MIND
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Upcoming Events
              </Link>
            </li>

            <li>
              <Link
                to='/resources'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Support Resources
              </Link>
            </li>
          </ul>
          <button
            className='transparent-button'
            onClick={() => navigate('/resources')}
          >
            Support Resources
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
