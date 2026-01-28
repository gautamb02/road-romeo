import { bikeBrands } from '@/data/bikes';

export const BrandsServed = () => {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">Brands We Service</h2>
          <p className="section-subheading">
            We service all major two-wheeler brands with expertise and genuine parts.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {bikeBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl p-6 flex items-center justify-center h-28 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-xl font-bold text-text-primary text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
