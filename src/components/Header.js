import React from 'react';
import LazyLoad from 'react-lazyload';
import content from '../data/content';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <a className="navbar-brand" href="#hero">
        <LazyLoad height={40} offset={100}>
          <img src={content.header.logoSrc} width="40" height="40" alt="Simtestlab Logo" />
        </LazyLoad>
        {content.header.brand}
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {content.header.navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
