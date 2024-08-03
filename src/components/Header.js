import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      findCurrentTabSelector();
      animateSections();
    };

    const findCurrentTabSelector = () => {
      let newCurrentId = null;
      const sections = document.querySelectorAll('section[id], footer[id]');
      const navbarHeight = document.querySelector('.MuiAppBar-root')?.offsetHeight || 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          newCurrentId = section.id;
        }
      });

      setCurrentId(newCurrentId);
    };

    const animateSections = () => {
      const sections = document.querySelectorAll('section.fade-in-up');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          section.style.opacity = 1;
          section.style.transform = 'none';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', findCurrentTabSelector);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', findCurrentTabSelector);
    };
  }, []);

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
      }, 300);
    }
  };

  return (
    <AppBar
      position="fixed"
      color={isSticky ? 'default' : 'transparent'}
      elevation={isSticky ? 4 : 0}
      style={{
        backdropFilter: isSticky ? 'blur(10px)' : 'none',
        backgroundColor: isSticky ? 'rgba(235, 242, 250, 0.85)' : 'transparent',
        transition: 'background-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            color: isSticky ? '#033F63' : '#EBF2FA',
            textShadow: isSticky ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img
            src={content.header.logoSrc}
            width="40"
            height="40"
            alt="Simtestlab Logo"
            style={{ padding: '5px' }}  // Add padding around the logo
          />
          {content.header.brand}
        </Typography>
        <div className="desktop-menu">
          {content.header.navItems.map((item, index) => (
            <Button
              key={index}
              color={currentId === item.href.substring(1) ? 'secondary' : 'inherit'}
              onClick={(e) => scrollToSection(e, item.href)}
              style={{
                color: isSticky ? '#033F63' : '#EBF2FA',
                textShadow: isSticky ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.5)',
                transition: 'color 0.3s',
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            style={{
              color: isSticky ? '#033F63' : '#EBF2FA',
              textShadow: isSticky ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.5)',
            }}
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
