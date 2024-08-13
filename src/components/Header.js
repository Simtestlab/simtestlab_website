import React, { useEffect, useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import content from '../data/content';
import '../styles/Header.css';  // Importing the separate CSS file

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = useMediaQuery('(max-width:800px)');  // Adjusted to check for screens below 800px

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

  return (
    <AppBar
      position="fixed"
      elevation={isSticky ? 4 : 0}
      className={`custom-navbar ${isSticky ? 'navbar-light bg-white' : 'navbar-dark'}`}
    >
      <Toolbar>
        <Typography
          variant="h6"
          className="navbar-brand"
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
        {!isMobile && (
          <div className="desktop-menu">
            {content.header.navItems.map((item, index) => (
              <Button
                key={index}
                className="nav-link"
                href={`#${item.href.substring(1)}`}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </Button>
            ))}
            <span className="nav-slider" />
          </div>
        )}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            style={{ fontSize: '2rem' }}  // Increase the size of the menu icon
          >
            <MenuIcon />
          </IconButton>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          className="mobile-menu"
          PaperProps={{
            style: {
              width: '100vw',  // Full width of the screen
              maxWidth: 'none',
              margin: '0',
              padding: '0',
              left: 0,  // Ensure alignment with the left edge
            },
          }}
        >
          {content.header.navItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={(e) => {
                scrollToSection(e, item.href);
                handleMenuClose();
              }}
              className="menu-item"
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
