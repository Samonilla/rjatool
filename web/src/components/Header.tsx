"use client";

import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">RJA Tool</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-indigo-200 transition">About</a>
          <a href="#goals" className="hover:text-indigo-200 transition">Goals</a>
          <a href="#progress" className="hover:text-indigo-200 transition">Progress</a>
          <a href="#team" className="hover:text-indigo-200 transition">Team</a>
          <a href="#contact" className="hover:text-indigo-200 transition">Contact</a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 px-4 py-2">
          <a href="#about" className="block py-2 hover:text-indigo-200 transition">About</a>
          <a href="#goals" className="block py-2 hover:text-indigo-200 transition">Goals</a>
          <a href="#progress" className="block py-2 hover:text-indigo-200 transition">Progress</a>
          <a href="#team" className="block py-2 hover:text-indigo-200 transition">Team</a>
          <a href="#contact" className="block py-2 hover:text-indigo-200 transition">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Header