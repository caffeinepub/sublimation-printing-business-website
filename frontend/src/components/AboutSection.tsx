import { CheckCircle2, Zap, Users, Award } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Custom Orders',
    description: 'Personalized designs tailored to your exact specifications — from single pieces to large batches.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Bulk Printing',
    description: 'Competitive pricing for bulk orders. Perfect for corporate gifts, events, and promotional merchandise.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Premium Quality',
    description: 'We use only top-grade sublimation inks and materials to ensure vibrant, long-lasting results.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality. Your orders delivered on time, every time.',
  },
];

const highlights = [
  'State-of-the-art sublimation equipment',
  'Eco-friendly, non-toxic inks',
  'Wash-resistant, fade-proof prints',
  'Dedicated customer support',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-teal mb-3">
            About Us
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            The Art & Science of{' '}
            <span className="text-gradient-warm">Sublimation Printing</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with creative expertise to deliver sublimation products that exceed expectations.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-warm-lg aspect-video lg:aspect-[4/3]">
              <img
                src="/assets/generated/about-section.dim_1200x600.png"
                alt="SubliCraft Studio workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-brand-orange text-white rounded-2xl px-6 py-4 shadow-warm-lg hidden sm:block">
              <div className="font-display font-bold text-3xl">5+</div>
              <div className="font-body text-xs font-medium opacity-90">Years of Excellence</div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-brand-amber/20 -z-10" />
          </div>

          {/* Text content */}
          <div>
            <h3 className="font-display font-bold text-3xl text-foreground mb-5">
              We Don't Just Print — We Create Experiences
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              At SubliCraft Studio, we're passionate about transforming your ideas into tangible, beautiful products. 
              Sublimation printing allows us to infuse vibrant, photo-quality designs directly into the material — 
              resulting in prints that are incredibly durable, vivid, and smooth to the touch.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Whether you're looking for personalized gifts, branded merchandise, or creative home décor, 
              our team of skilled artisans and technicians ensures every product meets the highest standards of quality.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-6 card-hover shadow-xs group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">
                {service.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
