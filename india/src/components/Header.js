import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    if (open) setOpen(false);
  }, [location.pathname, open]);

  const NavList = () => {
    const location = useLocation();
    
    const navItems = [
      { path: "/", label: "Home" },
      { path: "/culture", label: "Culture" },
      { path: "/heritage", label: "Heritage" },
      { path: "/states", label: "States" },
      { path: "/forts", label: "Forts" }
    ];

    return (
      <>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <header className="header-wrapper">
      <div className="glass-header">
        <nav className="nav-container">
          <div className="logo"><h1>IndiGlobe</h1></div>
          <ul className="nav-links">
            <NavList />
          </ul>
          <button
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </nav>
        {open && (
          <div className="mobile-menu" role="dialog" aria-modal="false">
            <ul onClick={() => setOpen(false)}>
              <NavList />
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
