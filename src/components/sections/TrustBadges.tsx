import { Star, Users, Shield, Truck } from 'lucide-react';
import { siteConfig } from '@/config/site';

const badges = [
  {
    icon: Star,
    value: siteConfig.stats.rating.toString(),
    label: 'Google Rating',
    sublabel: `${siteConfig.stats.reviewCount}+ reviews`,
  },
  {
    icon: Users,
    value: siteConfig.stats.customersServed,
    label: 'Happy Customers',
    sublabel: 'Across Pune',
  },
  {
    icon: Shield,
    value: `${siteConfig.stats.warrantyDays} Days`,
    label: 'Service Warranty',
    sublabel: 'On all services',
  },
  {
    icon: Truck,
    value: 'FREE',
    label: 'Pickup & Drop',
    sublabel: 'At your doorstep',
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{badge.value}</p>
              <p className="font-semibold text-text-primary text-lg">{badge.label}</p>
              <p className="text-base text-text-secondary mt-1">{badge.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
