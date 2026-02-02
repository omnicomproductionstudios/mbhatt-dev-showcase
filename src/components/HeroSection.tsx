import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('banners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up opacity-0">
          <img 
            src="/logo.png" 
            alt="Mahesh Bhatt Developer Showcase Logo" 
            className="h-16 md:h-20 mx-auto mb-8 brightness-0 invert"
          />
        </div>
        
        <h1 className="animate-fade-up opacity-0 stagger-1 text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
          <span className="text-foreground">Creative</span>
          <br />
          <span className="text-gradient">Showcase</span>
        </h1>
        
        <p className="animate-fade-up opacity-0 stagger-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Explore our collection of animated HTML5 banner ads, 
          websites, and brand collaborations crafted with precision and creativity.
        </p>
        
        <div className="animate-fade-up opacity-0 stagger-3 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>HTML5 Banners</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span>Web Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
            <span>Brand Design</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};
