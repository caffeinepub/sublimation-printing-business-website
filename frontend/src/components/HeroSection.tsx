import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1600x700.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'oklch(0.82 0.18 75)' }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'oklch(0.65 0.22 42)' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-amber" />
            <span className="text-white/90 text-sm font-body font-medium tracking-wide">
              Premium Sublimation Printing
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6 animate-fade-up">
            Turn Your Ideas Into{' '}
            <span className="text-gradient-warm">Vibrant Art</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Custom sublimation printing on mugs, frames, t-shirts, cushions & more.
            Bring your vision to life with stunning, lasting color.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-body font-bold px-8 py-4 text-lg rounded-full shadow-warm-lg hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-200 min-w-[200px]"
            >
              Explore Our Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-body font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 min-w-[200px]"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '10K+', label: 'Products Made' },
              { value: '5★', label: 'Rated Service' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-brand-amber">{stat.value}</div>
                <div className="font-body text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
