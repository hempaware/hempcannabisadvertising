import React from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary-green">Services</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary-green">Benefits</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-green">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-green">Contact</a>
            <a 
              href="https://hempaware.com/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green text-white px-6 py-2 rounded-full hover:bg-primary-darkgreen transition duration-300 inline-flex items-center"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Free Strategy Session
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary-green">Services</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-primary-green">Benefits</a>
            <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-primary-green">FAQ</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary-green">Contact</a>
            <a 
              href="https://hempaware.com/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 bg-primary-green text-white px-6 py-2 rounded-full hover:bg-primary-darkgreen transition duration-300 inline-flex items-center justify-center"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Free Strategy Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}