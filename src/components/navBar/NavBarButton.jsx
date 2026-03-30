import React from 'react';

export default function NavBarButton({ nav, active, onActivate, className = '' }) {
  const isActive = active === nav.title;
  const classes = `${
    isActive ? 'bg-eerieBlack text-white' : 'text-eerieBlack'
  } hover:bg-eerieBlack hover:text-white transition-colors duration-200 px-2 py-1 rounded-md text-[14px] font-medium font-poppins uppercase tracking-[3px] cursor-pointer nav-links ${className}`;

  return (
    <li className={classes} onClick={() => onActivate && onActivate(nav)}>
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  );
}
