import { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Mahesh Bhatt Developor Showcase Logo" 
              className="h-10 md:h-12 brightness-0 invert"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('banners')} 
              className="nav-link text-sm font-medium uppercase tracking-wider"
            >
              Ad Banners
            </button>
            <button 
              onClick={() => scrollToSection('websites')} 
              className="nav-link text-sm font-medium uppercase tracking-wider"
            >
              Websites
            </button>
            <button 
              onClick={() => scrollToSection('brands')} 
              className="nav-link text-sm font-medium uppercase tracking-wider"
            >
              Brands
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
