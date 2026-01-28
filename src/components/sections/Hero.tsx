import { useState } from 'react';
import { Bike, CheckCircle } from 'lucide-react';
import { Button, Select } from '@/components/common';
import { siteConfig } from '@/config/site';
import { bikeBrands, getModelsByBrand } from '@/data/bikes';
import { services } from '@/data/services';

export const Hero = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [phone, setPhone] = useState('');

  const brandOptions = bikeBrands.map(brand => ({
    value: brand.id,
    label: brand.name,
  }));

  const modelOptions = selectedBrand
    ? getModelsByBrand(selectedBrand).map(model => ({
      value: model,
      label: model,
    }))
    : [];

  const serviceOptions = services.map(service => ({
    value: service.id,
    label: service.name,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with pre-filled message
    const message = `Hi! I want to book a bike service.\n\nBike: ${selectedBrand} ${selectedModel}\nService: ${selectedService}\nPhone: ${phone}`;
    const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full mb-8">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Free Pickup & Drop in Pune</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-8 leading-tight">
              Best <span className="text-primary">Bike Service</span> in Pune
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional two-wheeler servicing with{' '}
              <span className="font-semibold text-accent">FREE pickup & drop</span>.
              Trusted by {siteConfig.stats.customersServed} happy customers.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{siteConfig.stats.rating}</span>
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-text-primary">Google Rating</p>
                  <p className="text-sm text-text-secondary">{siteConfig.stats.reviewCount}+ reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{siteConfig.stats.warrantyDays}</span>
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-text-primary">Days Warranty</p>
                  <p className="text-sm text-text-secondary">On all services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Bike className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary">Book Your Service</h2>
                <p className="text-base text-text-secondary">Get instant quote on WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  label="Bike Brand"
                  options={brandOptions}
                  placeholder="Select Brand"
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    setSelectedModel('');
                  }}
                  required
                />
                <Select
                  label="Bike Model"
                  options={modelOptions}
                  placeholder="Select Model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedBrand}
                  required
                />
              </div>

              <Select
                label="Service Type"
                options={serviceOptions}
                placeholder="Select Service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-text-secondary">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Free Pickup & Drop included</span>
              </div>

              <Button type="submit" fullWidth size="lg">
                Book Free Pickup Now
              </Button>

              <p className="text-center text-sm text-text-secondary">
                Or call us at{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-primary">
                  {siteConfig.contact.phone}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
