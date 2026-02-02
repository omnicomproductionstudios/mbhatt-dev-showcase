const brands = [
  { name: 'logo name', logo: '/brands/Picture_1.jpg' },
  { name: 'logo name', logo: '/brands/Picture_2.jpg' },
  { name: 'logo name', logo: '/brands/Picture_3.png' },
  { name: 'logo name', logo: '/brands/Picture_4.png' },
  { name: 'logo name', logo: '/brands/Picture_5.png' },
  { name: 'logo name', logo: '/brands/Picture_6.png' },
  { name: 'logo name', logo: '/brands/Picture_7.png' },
  { name: 'logo name', logo: '/brands/Picture_8.png' },
  { name: 'logo name', logo: '/brands/Picture_9.png' },
  { name: 'logo name', logo: '/brands/Picture_10.png' },
  { name: 'logo name', logo: '/brands/Picture_11.png' },
  { name: 'logo name', logo: '/brands/Picture_12.png' },
  { name: 'logo name', logo: '/brands/Picture_13.jpg' },
  { name: 'logo name', logo: '/brands/Picture_14.jpg' },
  { name: 'logo name', logo: '/brands/Picture_15.png' },
  { name: 'logo name', logo: '/brands/Picture_16.png' },
  { name: 'logo name', logo: '/brands/Picture_17.png' },
  { name: 'logo name', logo: '/brands/Picture_18.png' },
  { name: 'logo name', logo: '/brands/Picture_19.png' },
  { name: 'logo name', logo: '/brands/Picture_20.png' },
  { name: 'logo name', logo: '/brands/Picture_21.jpg' },
  { name: 'logo name', logo: '/brands/Picture_22.jpg' },
  { name: 'logo name', logo: '/brands/Picture_23.png' },
  { name: 'logo name', logo: '/brands/Picture_24.jpg' },
  { name: 'logo name', logo: '/brands/picture_25.jpg' },
  { name: 'logo name', logo: '/brands/Picture_26.jpg' },

  
];

export const BrandsSection = () => {
  return (
    <section id="brands" className="py-24 md:py-32 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Collaborations</span>
          <h2 className="section-title mt-4">Brands We've Worked With</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Trusted by world-renowned brands to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="logo-card bg-white"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-[200px] h-[150px] object-contain "
                onError={(e) => {
                  // Fallback to text if logo doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-xl font-display font-bold text-muted-foreground">${brand.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
