import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#works' },
    { name: 'Why Me?', href: '#whyme' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary tracking-tighter">
          Kage Kota<span className="text-secondary">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text/70 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary transition-all shadow-lg shadow-primary/10 active:scale-95"
        >
          お問い合わせ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
