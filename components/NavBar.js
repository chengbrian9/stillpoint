// components/NavBar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.nav 
      id="main-navigation"
      className="bg-gradient-to-r from-primary-blue via-primary-blue to-blue-800 border-b-4 border-primary-gold shadow-2xl backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
      style={{
        background: 'linear-gradient(135deg, #0d3b66 0%, #1e5f8b 50%, #0d3b66 100%)',
        boxShadow: '0 10px 30px -5px rgba(13, 59, 102, 0.3), 0 0 0 1px rgba(191, 158, 75, 0.2)'
      }}
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3
            }}
          >
            <Link 
              href="/" 
              className="flex items-center flex-shrink-0 focus:outline-none focus-luxury"
              aria-label="Stillpoint Corporate Housing Home"
            >
              <motion.img 
                src="/3.svg" 
                alt="Stillpoint Corporate Housing Logo" 
                className="h-12 sm:h-16 lg:h-20 w-auto transition-luxury"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  filter: 'brightness(1.1) drop-shadow(0 0 20px rgba(191, 158, 75, 0.3))'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div 
              className="ml-10 flex items-baseline space-x-4 lg:space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.6 + (index * 0.1)
                  }}
                >
                  <Link 
                    href={item.path}
                    className="relative group"
                    aria-current={router.pathname === item.path ? 'page' : undefined}
                  >
                    <motion.span
                      className={`px-4 py-3 text-sm lg:text-base font-medium min-h-touch flex items-center focus:outline-none focus-luxury relative z-10 transition-luxury ${
                        router.pathname === item.path 
                          ? 'text-white' 
                          : 'text-gray-300'
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        color: '#ffffff'
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Active indicator */}
                    {router.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
                        layoutId="activeTab"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {/* Main gradient bar */}
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-gold via-yellow-400 to-primary-gold relative"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ 
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.2
                          }}
                          style={{
                            boxShadow: '0 0 15px rgba(191, 158, 75, 0.6), 0 0 30px rgba(191, 158, 75, 0.3)'
                          }}
                        >
                          {/* Animated shimmer overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              ease: 'easeInOut',
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          />
                          
                          {/* Pulsing glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-gold/50 via-yellow-400/50 to-primary-gold/50"
                            animate={{
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              ease: 'easeInOut',
                              repeat: Infinity
                            }}
                          />
                        </motion.div>
                        
                        {/* Bottom glow reflection */}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-b from-primary-gold/30 to-transparent blur-sm"
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          transition={{ 
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.4
                          }}
                        />
                      </motion.div>
                    )}
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                    
                    {/* Background glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      style={{
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4
            }}
          >
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-300 focus:outline-none focus-luxury min-h-touch min-w-touch relative overflow-hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Background shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%', skewX: -12 }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              
              {/* Hamburger icon */}
              <motion.svg
                className="h-6 w-6 relative z-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  rotate: isMenuOpen ? 180 : 0,
                  scale: isMenuOpen ? 0.8 : 1
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  animate={{
                    pathLength: isMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
              
              {/* Close icon */}
              <motion.svg
                className="h-6 w-6 absolute inset-0 m-auto z-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  rotate: isMenuOpen ? 0 : -180,
                  scale: isMenuOpen ? 1 : 0.8
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  animate={{
                    pathLength: isMenuOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden overflow-hidden"
            role="menu"
            aria-labelledby="mobile-menu-button"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div 
              className="px-4 pt-6 pb-8 space-y-3 border-t border-primary-gold relative"
              style={{
                background: 'linear-gradient(135deg, #0d3b66 0%, #1e5f8b 50%, #0d3b66 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 30px -5px rgba(0,0,0,0.3)'
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1
              }}
            >
              {/* Decorative gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"
              />
              
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -50, opacity: 0, scale: 0.9 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -50, opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2 + (index * 0.1)
                  }}
                >
                  <Link
                    href={item.path}
                    className="relative group block"
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={router.pathname === item.path ? 'page' : undefined}
                  >
                    <motion.div
                      className={`px-6 py-5 text-base font-medium min-h-touch focus:outline-none focus-luxury rounded-xl mx-2 relative overflow-hidden transition-luxury ${
                        router.pathname === item.path
                          ? 'text-white'
                          : 'text-gray-300'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        x: 8,
                        color: '#ffffff'
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      style={{
                        background: router.pathname === item.path 
                          ? 'linear-gradient(135deg, rgba(191, 158, 75, 0.2) 0%, rgba(191, 158, 75, 0.1) 100%)'
                          : 'transparent'
                      }}
                    >
                      {/* Active indicator */}
                      {router.pathname === item.path && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-2 overflow-hidden"
                          layoutId="mobileActiveTab"
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        >
                          {/* Main gradient bar */}
                          <motion.div
                            className="h-full bg-gradient-to-b from-primary-gold via-yellow-400 to-primary-gold relative"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ 
                              duration: 0.6,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: 0.2
                            }}
                            style={{
                              boxShadow: '0 0 15px rgba(191, 158, 75, 0.6), 0 0 30px rgba(191, 158, 75, 0.3)'
                            }}
                          >
                            {/* Animated shimmer overlay */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"
                              animate={{
                                y: ['-100%', '200%']
                              }}
                              transition={{
                                duration: 2.5,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatDelay: 1.5
                              }}
                            />
                            
                            {/* Pulsing glow effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-b from-primary-gold/50 via-yellow-400/50 to-primary-gold/50"
                              animate={{
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2.5,
                                ease: 'easeInOut',
                                repeat: Infinity
                              }}
                            />
                            
                            {/* Edge highlight */}
                            <motion.div
                              className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-yellow-300 via-primary-gold to-yellow-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{
                                duration: 3,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                delay: 0.5
                              }}
                            />
                          </motion.div>
                          
                          {/* Side glow reflection */}
                          <motion.div
                            className="absolute -right-1 top-0 bottom-0 w-3 bg-gradient-to-r from-primary-gold/20 to-transparent blur-sm"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ 
                              duration: 0.8,
                              ease: [0.25, 0.46, 0.45, 0.94],
                              delay: 0.4
                            }}
                          />
                        </motion.div>
                      )}
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        style={{
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                      
                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%', skewX: -12 }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      />
                      
                      <span className="relative z-10">{item.name}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
