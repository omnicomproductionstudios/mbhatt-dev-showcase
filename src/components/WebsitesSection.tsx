import { ExternalLink } from 'lucide-react';

const websites = [
  { name: 'DDB.com', url: 'https://www.ddb.com/', description: 'Global Creative Agency Network' },
  { name: 'adam&eveDDB', url: 'https://www.adamandeveddb.com/', description: 'Award-Winning Creative Agency' },
  { name: 'Energy Upgrade California', url: 'https://energyupgradeca.org/', description: 'Energy Upgrade California' },
  { name: 'Young Again Never Again', url: 'https://youngagainneveragain.org/', description: 'Educational Platform for Holocaust Education' },
  { name: 'DDB Counts', url: 'https://ddbcountsdev.wpenginepowered.com/', description: 'DDB Counts' },
];

export const WebsitesSection = () => {
  return (
    <section id="websites" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Web Development</span>
          <h2 className="section-title mt-4" style={{ background: 'linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(180, 70%, 40%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Websites
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Full-scale web development projects for industry-leading agencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {websites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-showcase p-8 text-center hover:border-accent/50"
            >
              <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
                {site.name}
              </h3>
              <p className="text-muted-foreground mt-2">{site.description}</p>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-accent">
                Visit Website
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
