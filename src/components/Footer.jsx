import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-background py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-primary tracking-tighter mb-4 inline-block">
              Kage Kota<span className="text-secondary">.</span>
            </a>
            <p className="text-text/40 text-sm max-w-xs">
              10年の経験に基づいた丁寧なWeb制作で、<br />
              あなたのビジネスに「納得感」のある価値を。
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex gap-6">
              {['About', 'Skills', 'Works', 'Contact'].map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-text/60 hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <p className="text-text/30 text-xs tracking-widest uppercase font-bold">
              © {currentYear} Kage Kota. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
