import { BannerCard } from './BannerCard';

const banners = [
  { title: 'AI Campaign', url: '/Anaplan1/index.html', size: '300x250', brand: 'Anaplan' },
  { title: 'AI Campaign 01', url: '/Anaplan2/index.html', size: '300x250', brand: 'Anaplan' },
  { title: 'Rich Media Banner', url: '/CapitalOne2/Bank_Bank_Nextdoor_Cafe_NA_RM_RM_EN_NA_728x90_P00114026/Bank_Bank_Nextdoor_Cafe_NA_RM_RM_EN_NA_728x90_P00114026.html', size: '728x90', brand: 'CapitalOne' },
  { title: 'Standard Banner', url: '/CapitalOne1/index.html', size: '300x250', brand: 'CapitalOne' },
  { title: 'Campaign Banner', url: '/Avanti/10608-01_300x250/index.html', size: '300x250', brand: 'Avanti' },
  { title: 'Business Banner', url: '/BTBusiness/300x250/index.html', size: '300x250', brand: 'BT Business' },
  { title: 'Product Banner', url: '/calpol/970x250/index.html', size: '970x250', brand: 'Calpol' },
  { title: 'Brand Banner', url: '/columbia/300x250/index.html', size: '300x250', brand: 'Columbia' },
  { title: 'Auto Banner', url: '/cupra/300x250/index.html', size: '300x250', brand: 'Cupra' },
  { title: 'Smokies Campaign', url: '/Eckrich/Eckrich_Smokies_Banners_v1_300x600/index.html', size: '300x600', brand: 'Eckrich' },
  { title: 'Fuel Banner', url: '/Esso/300x250/index.html', size: '300x250', brand: 'Esso' },
  { title: 'Fuel Banner 01', url: '/Esso2/300x250/index.html', size: '300x250', brand: 'Esso' },
  { title: 'Sky Sports Banner', url: '/Guinness/Guinness_SkySportsBanners_300x250/index.html', size: '300x250', brand: 'Guinness' },
  { title: 'Banking Banner', url: '/Halifex/300x250/index.html', size: '300x250', brand: 'Halifax' },
  { title: 'Trading Banner', url: '/IG/300X250/index.html', size: '300x250', brand: 'IG' },
  { title: 'Investment Banner', url: '/iShares/300x250/index.html', size: '300x250', brand: 'iShares' },
  { title: 'Vacation Banner', url: '/JetBlue/tallahassee_dynamic_banners_route1/base/CA_Vacation_R2_baseload_300x250/index.html', size: '300x250', brand: 'JetBlue' },
  { title: 'Aruba Cuisine', url: '/JetBlue2/05768_JetBlue_Aruba_Cusine_route1/base/JetBlue_Aruba_Cusine_baseload_300x250/index.html', size: '300x250', brand: 'JetBlue' },
  { title: 'Rum Banner', url: '/kraken/300x250/index.html', size: '300x250', brand: 'Kraken' },
  { title: 'Banking Banner', url: '/lloyds/300x250/index.html', size: '300x250', brand: 'Lloyds' },
  { title: 'Banking Banner 01', url: '/lloyds2/300x250/index.html', size: '300x250', brand: 'Lloyds' },
  { title: 'Banking Banner 02', url: '/lloyds3/320x468/index.html', size: '320x468', brand: 'Lloyds' },
  { title: 'Engage Layer', url: '/lloyds4/Engage%20Layer%201%20-%20300x250/index.html', size: '300x250', brand: 'Lloyds' },
  { title: 'Auto Banner', url: '/nissan/200576_300x250/index.html', size: '300x250', brand: 'Nissan' },
  { title: 'Pest Control', url: '/orkin/Orkin_General_Pest_HVC_300X250/index.html', size: '300x250', brand: 'Orkin' },
  { title: 'Arona Campaign', url: '/SEAT/SEAT_2024_AWARENESS_ARONA_Banner_FOM_300x250/index.html', size: '300x250', brand: 'SEAT' },
  { title: 'GWR', url: '/GWR/300x250/index.html', size: '300x250', brand: 'GWR' },
];

export const BannersSection = () => {
  return (
    <section id="banners" className="py-24 md:py-32 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Work</span>
          <h2 className="section-title mt-4">Ad Banners</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interactive HTML5 banner advertisements crafted for leading global brands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <BannerCard
              key={index}
              title={banner.title}
              url={banner.url}
              size={banner.size}
              brand={banner.brand}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
