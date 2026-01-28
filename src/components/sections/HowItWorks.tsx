import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Book Online',
    description: 'Fill the form or call/WhatsApp us to book your service',
  },
  {
    icon: Calendar,
    title: 'Schedule Pickup',
    description: 'Choose a convenient time slot for free bike pickup',
  },
  {
    icon: Wrench,
    title: 'Expert Service',
    description: 'Our trained mechanics service your bike with care',
  },
  {
    icon: CheckCircle,
    title: 'Free Delivery',
    description: 'Get your serviced bike delivered back to your doorstep',
  },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Getting your bike serviced has never been easier.
            Four simple steps to a perfectly maintained ride.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center px-6">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20" />
              )}

              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
                <step.icon className="w-10 h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-white text-base font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {step.title}
              </h3>

              <p className="text-text-secondary text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
