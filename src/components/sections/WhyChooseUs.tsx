import { Card } from '@/components/common';
import { Truck, Shield, Clock, Wrench, BadgeCheck, Wallet } from 'lucide-react';

const reasons = [
  {
    icon: Truck,
    title: 'Free Pickup & Drop',
    description: 'We pick up your bike from your doorstep and deliver it back after service - completely free!',
  },
  {
    icon: Shield,
    title: '10-Day Warranty',
    description: 'All our services come with a 10-day unconditional warranty for your peace of mind.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Most services completed within 24 hours. Get back on the road faster!',
  },
  {
    icon: Wrench,
    title: 'Expert Mechanics',
    description: 'Our trained technicians have years of experience with all bike brands.',
  },
  {
    icon: BadgeCheck,
    title: 'Genuine Parts',
    description: 'We use only genuine OEM or equivalent quality spare parts for all repairs.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Get detailed quotes before any work begins.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">Why Choose Road Romeo?</h2>
          <p className="section-subheading">
            We're not just another bike service center. Here's what makes us
            the preferred choice for thousands of riders in Pune.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="flex flex-col"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {reason.title}
              </h3>

              <p className="text-lg text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
