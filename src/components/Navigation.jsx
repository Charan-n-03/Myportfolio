import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import CometDial from './react-bits/CometDial';
import './Navigation.css';

export default function Navigation() {
  const { theme, themeValue, handleDialChange, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 860) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const dialAccent = theme === 'dark' ? '#f4f4f6' : '#121214';

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand / Wordmark */}
        <a href="#" className="nav-brand cursor-target" data-cursor-label="Home">
          <span className="nav-brand-monogram">CN</span>
          <div className="nav-brand-text">
            <span>Charan N</span>
            <span className="nav-brand-title">React / Full-Stack</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link cursor-target"
                  data-cursor-label={link.label}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Real CometDial Theme Controller */}
        <div className="nav-theme-wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            className="nav-theme-control cursor-target"
            data-cursor-label="Theme Dial"
            title="Theme Controller (0 = Light, 1 = Dark). Drag dial or use arrow keys."
          >
            <CometDial
              value={themeValue}
              min={0}
              max={1}
              step={1}
              unit=""
              size={46}
              sweep={280}
              thickness={4}
              speed={35}
              accent={dialAccent}
              ink={dialAccent}
              label="Interactive theme dial: 0 for light, 1 for dark. Use arrow keys to adjust."
              formatValue={v => (v >= 0.5 ? 'Dark' : 'Light')}
              onChange={handleDialChange}
            />
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-theme-meta"
              aria-label={`Current theme is ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode.`}
              style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
            >
              <span className="nav-theme-label">Theme</span>
              <span className="nav-theme-state" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {theme === 'dark' ? <Moon size={12} aria-hidden="true" /> : <Sun size={12} aria-hidden="true" />}
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div id="mobile-navigation" className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <ul className="mobile-drawer-menu">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-drawer-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Appearance</span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleTheme}
                style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
