// components/NavBar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Corporate Benefits', path: '/benefits' },
    { name: 'Client FAQs', path: '/faqs' },
  ];
  
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '96px',
        borderBottom: '4px solid var(--color-gold)',
        background: 'var(--color-blue)',
        marginBottom: '2rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/3.svg" alt="Logo" style={{ height: 64, marginRight: 32 }} />
      </Link>
      
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`px-3 py-2 font-medium ${router.pathname === item.path ? 'text-white border-b-2 border-gold' : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'}`}
            style={{
              borderColor: router.pathname === item.path ? 'var(--color-gold)' : '',
              transition: 'all 0.2s ease'
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
