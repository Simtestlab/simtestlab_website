import React, { useEffect, useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import content from '../data/content';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const updateSliderPosition = useCallback((id) => {
    const activeTab = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeTab) {
      const slider = document.querySelector('.nav-slider');
      slider.style.width = `${activeTab.offsetWidth}px`;
      slider.style.left = `${activeTab.offsetLeft}px`;
    }
  }, []);

  const findCurrentTabSelector = useCallback(() => {
    let newCurrentId = null;
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navbarHeight = document.querySelector('.MuiAppBar-root')?.offsetHeight || 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
        newCurrentId = section.id;
      }
    });

    if (newCurrentId !== currentId) {
      setCurrentId(newCurrentId);
      updateSliderPosition(newCurrentId);
    }
  }, [currentId, updateSliderPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      findCurrentTabSelector();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', findCurrentTabSelector);

    findCurrentTabSelector(); // Initial call to set slider position on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', findCurrentTabSelector);
    };
  }, [findCurrentTabSelector]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    const navbar = document.querySelector('.MuiAppBar-root');

    if (targetElement && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const scrollTop = targetElement.offsetTop - navbarHeight + 1;

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',  // This ensures smooth scrolling
      });

      setTimeout(() => {
        setCurrentId(href.substring(1));
        updateSliderPosition(href.substring(1));
      }, 300);
    }
  };

  const appBarStyle = {
    backdropFilter: isSticky ? 'blur(10px)' : 'none',
    backgroundColor: isSticky ? 'rgba(235, 242, 250, 0.85)' : 'transparent',
    transition: 'background-color 0.3s, backdrop-filter 0.3s',
  };

  const brandStyle = {
    flexGrow: 1,
    color: isSticky ? '#033F63' : '#EBF2FA',
    textShadow: isSticky ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.5)',
    fontSize: '1.5rem',
  };

  const navLinkStyle = (isActive) => ({
    color: isSticky ? (isActive ? '#199297' : '#033F63') : (isActive ? '#199297' : '#EBF2FA'),
    textShadow: isSticky ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.5)',
    transition: 'color 0.3s',
    position: 'relative',
    padding: '10px 15px',
    margin: '0 20px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const sliderStyle = {
    position: 'absolute',
    bottom: 0,
    height: '3px',
    backgroundColor: '#199297',
    transition: 'width 0.3s ease, left 0.3s ease',
  };

  return (
    <AppBar
      position="fixed"
      elevation={isSticky ? 4 : 0}
      style={appBarStyle}
      className={`custom-navbar ${isSticky ? 'navbar-light bg-white' : 'navbar-dark'}`}
    >
      <Toolbar>
        <Typography
          variant="h6"
          style={brandStyle}
        >
          <img
            src={content.header.logoSrc}
            width="40"
            height="40"
            alt="Simtestlab Logo"
            style={{ padding: '5px' }}
          />
          {content.header.brand}
        </Typography>
        <div className="desktop-menu" style={{ position: 'relative' }}>
          {content.header.navItems.map((item, index) => (
            <Button
              key={index}
              className="nav-link"
              href={`#${item.href.substring(1)}`}
              onClick={(e) => scrollToSection(e, item.href)}
              style={navLinkStyle(currentId === item.href.substring(1))}
            >
              {item.label}
            </Button>
          ))}
          <span className="nav-slider" style={sliderStyle} />
        </div>
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {content.header.navItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={(e) => {
                scrollToSection(e, item.href);
                handleMenuClose();
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
