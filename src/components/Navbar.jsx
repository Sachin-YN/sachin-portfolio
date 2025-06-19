import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between p-4 bg-white dark:bg-black shadow z-50">
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">Sachin Y.</h1>
      <ul className="flex gap-4 text-sm font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}