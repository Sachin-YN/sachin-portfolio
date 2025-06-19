import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="py-4 px-8 shadow-md bg-white fixed top-0 w-full z-50 flex justify-between items-center">
      <h1 className="text-xl font-bold">Sachin Yoganandham</h1>
      <div className="space-x-4">
        <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
