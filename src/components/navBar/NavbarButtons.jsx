import React from 'react';

export default function NavBarButton({ nav, active, onActivate, className = '' }) {
  const isActive = active === nav.title;
  const classes = `${
    isActive ? 'bg-eerieBlack text-white' : 'text-eerieBlack'
  } hover:bg-eerieBlack hover:text-white transition-colors duration-200 px-4 py-2 rounded-md text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links ${className}`;

  return (
    <li className={classes} onClick={() => onActivate && onActivate(nav)}>
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  );
}