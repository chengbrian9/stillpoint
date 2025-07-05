// components/NavBar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Corporate Benefits', path: '/benefits' },
    { name: 'Client FAQs', path: '/faqs' },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-primary-blue border-b-4 border-primary-gold mb-4 sm:mb-8">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center flex-shrink-0"
            aria-label="Stillpoint Corporate Housing Home"
          >
            <img 
              src="/3.svg" 
              alt="Stillpoint Corporate Housing Logo" 
              className="h-10 sm:h-12 lg:h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 min-h-touch flex items-center ${
                    router.pathname === item.path 
                      ? 'text-white border-b-2 border-primary-gold' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                  aria-current={router.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-primary-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white min-h-touch min-w-touch"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-blue border-t border-primary-gold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-3 text-base font-medium transition-colors duration-200 min-h-touch ${
                router.pathname === item.path
                  ? 'text-white bg-primary-gold bg-opacity-20 border-l-4 border-primary-gold'
                  : 'text-gray-300 hover:text-white hover:bg-primary-blue hover:bg-opacity-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={router.pathname === item.path ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
