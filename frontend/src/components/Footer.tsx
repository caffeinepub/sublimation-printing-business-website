import { Printer, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  { label: 'About Us', id: 'about' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { icon: <SiFacebook className="w-4 h-4" />, label: 'Facebook', href: '#' },
  { icon: <SiInstagram className="w-4 h-4" />, label: 'Instagram', href: '#' },
  { icon: <SiX className="w-4 h-4" />, label: 'X', href: '#' },
  { icon: <SiYoutube className="w-4 h-4" />, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'sublicraftstudio';
  const appId = encodeURIComponent(hostname);

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-background">SubliCraft</span>
                <span className="font-body text-xs text-brand-orange font-semibold tracking-widest uppercase">Studio</span>
              </div>
            </button>
            <p className="font-body text-sm text-background/65 leading-relaxed max-w-xs mb-6">
              Transforming your ideas into vibrant, lasting sublimation products. 
              Premium quality, fast delivery, and unlimited creativity.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-background/10 hover:bg-brand-orange flex items-center justify-center text-background/70 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-base text-background mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-body text-sm text-background/65 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-base text-background mb-4">Our Products</h4>
            <ul className="space-y-2.5">
              {['Custom Mugs', 'Photo Frames', 'T-Shirts', 'Cushions', 'Keychains', 'Custom Orders'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="font-body text-sm text-background/65 hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-background/50">
            © {year} SubliCraft Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/50 flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-brand-orange fill-brand-orange mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-brand-orange-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
