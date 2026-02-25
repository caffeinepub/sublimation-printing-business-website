import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const products = [
  {
    name: 'Custom Mugs',
    description: 'Start your morning with a personalized touch. Our sublimation mugs feature vibrant, dishwasher-safe prints that last a lifetime.',
    image: '/assets/generated/product-mug.dim_600x600.png',
    badge: 'Best Seller',
    badgeColor: 'bg-brand-orange text-white',
  },
  {
    name: 'Photo Frames',
    description: 'Preserve your precious memories in stunning detail. Custom sublimation frames make perfect gifts for any occasion.',
    image: '/assets/generated/product-frame.dim_600x600.png',
    badge: 'Popular',
    badgeColor: 'bg-brand-teal text-white',
  },
  {
    name: 'T-Shirts',
    description: 'Wear your creativity. Our sublimation t-shirts deliver bold, all-over prints with colors that never fade or crack.',
    image: '/assets/generated/product-tshirt.dim_600x600.png',
    badge: 'New',
    badgeColor: 'bg-brand-amber text-foreground',
  },
  {
    name: 'Cushions',
    description: 'Add a personal flair to your living space. Custom cushion covers with photo-quality sublimation prints.',
    image: '/assets/generated/product-cushion.dim_600x600.png',
    badge: 'Trending',
    badgeColor: 'bg-brand-orange text-white',
  },
  {
    name: 'Keychains',
    description: 'Carry your memories everywhere. Compact, durable sublimation keychains — ideal for gifts and promotions.',
    image: '/assets/generated/product-keychain.dim_600x600.png',
    badge: 'Gift Idea',
    badgeColor: 'bg-brand-teal text-white',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Our Products
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Crafted With Passion,{' '}
            <span className="text-gradient-warm">Printed With Precision</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From everyday essentials to unique gifts — we bring your designs to life on premium sublimation products.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-warm-sm card-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-brand-cream-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-bold shadow-sm ${product.badgeColor}`}>
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors group/btn"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white shadow-warm-lg card-hover">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">
              Don't See What You Need?
            </h3>
            <p className="font-body text-white/85 text-sm mb-6 leading-relaxed">
              We offer custom sublimation on many more products. Contact us for a personalized quote!
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-brand-orange font-body font-bold px-6 py-3 rounded-full hover:bg-brand-cream transition-colors shadow-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
