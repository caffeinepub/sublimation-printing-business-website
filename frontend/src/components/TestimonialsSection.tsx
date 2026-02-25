import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Event Planner',
    quote: 'SubliCraft Studio delivered 200 custom mugs for our corporate event in record time. The quality was absolutely stunning — every client was impressed!',
    rating: 5,
    initials: 'SM',
    color: 'bg-brand-orange',
  },
  {
    name: 'James Okonkwo',
    role: 'Small Business Owner',
    quote: 'I ordered personalized t-shirts for my team and the colors are so vibrant. After dozens of washes, they still look brand new. Highly recommend!',
    rating: 5,
    initials: 'JO',
    color: 'bg-brand-teal',
  },
  {
    name: 'Priya Sharma',
    role: 'Photographer',
    quote: 'The photo frames I ordered for my clients are breathtaking. The sublimation process captures every detail perfectly. My clients love them!',
    rating: 5,
    initials: 'PS',
    color: 'bg-brand-amber',
  },
  {
    name: 'Carlos Rivera',
    role: 'Gift Shop Owner',
    quote: 'We\'ve been ordering keychains and cushions in bulk for over a year. Consistent quality, fast delivery, and the team is always helpful. 10/10!',
    rating: 5,
    initials: 'CR',
    color: 'bg-brand-orange-dark',
  },
];

const trustBadges = [
  { icon: '🏆', label: 'Premium Quality', desc: 'Top-grade materials' },
  { icon: '⚡', label: 'Fast Delivery', desc: 'On-time, every time' },
  { icon: '🎨', label: 'Custom Designs', desc: 'Unlimited creativity' },
  { icon: '✅', label: '100% Satisfaction', desc: 'Guaranteed results' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            What Our Customers{' '}
            <span className="text-gradient-warm">Are Saying</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Don't just take our word for it — hear from the people who trust us with their most important moments.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-3xl p-6 shadow-warm-sm border border-border card-hover flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-orange/30 mb-3 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-body font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-3xl p-8 lg:p-10">
          <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
            Why Choose SubliCraft Studio?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-4xl mb-3">{badge.icon}</span>
                <div className="font-display font-bold text-white text-base mb-1">{badge.label}</div>
                <div className="font-body text-white/75 text-xs">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
