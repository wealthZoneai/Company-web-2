import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/blue_logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo only */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Wealth Zone Group AI"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Nav items */}
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
        </ul>
      </nav>
    </header>
  );
}

/* Reusable NavItem */
function NavItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition-colors ${
            isActive
              ? "text-blue-600"
              : "hover:text-blue-600"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
