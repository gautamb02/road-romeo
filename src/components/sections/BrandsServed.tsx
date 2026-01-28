import { bikeBrands } from '@/data/bikes';

export const BrandsServed = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-20">
          <span className="badge-premium">Versatility</span>
          <h2 className="section-heading tracking-tighter">Brands We Expertly Service</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From daily commuters to super-bikes, our technicians are trained to handle
            the specific engineering of every major manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {bikeBrands.map((brand) => (
            <div
              key={brand.id}
              className="group relative bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center h-40 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                <span className="text-xl font-black text-slate-300 group-hover:text-white transition-colors">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <span className="text-lg font-black text-slate-900 text-center tracking-tight group-hover:text-primary transition-colors">
                {brand.name}
              </span>

              {/* Optional: Subtle indicator */}
              <div className="absolute bottom-4 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-slate-900 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 md:px-16">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-white mb-2">Don't see your brand?</h4>
            <p className="text-slate-400 font-medium font-lg">We likely still service it. Just give us a call.</p>
          </div>
          <a href="tel:9730963184" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-primary hover:text-white transition-all scale-105 shadow-xl shadow-black/20">
            Ask Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};
