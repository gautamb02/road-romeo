import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, Badge, Button } from '@/components/common';
import { services } from '@/data/services';

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            From basic maintenance to premium detailing, we offer comprehensive
            two-wheeler services with quality you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                {service.popular && (
                  <Badge variant="accent">Popular</Badge>
                )}
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.name}
              </h3>

              <p className="text-text-secondary mb-6 flex-1 leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="flex items-center justify-between pt-6 border-t">
                <div>
                  <span className="text-sm text-text-secondary">Starting at</span>
                  <p className="text-2xl font-bold text-accent">₹{service.price}</p>
                </div>

                <Link to={`/services/${service.slug}`}>
                  <Button variant="outline" size="sm">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="secondary" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
