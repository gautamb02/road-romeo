import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/common';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Road</span>
            <span className="text-2xl font-bold text-accent">Romeo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  font-medium transition-colors duration-200
                  ${isActive(link.href)
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </a>
            <Link to="/contact">
              <Button size="sm">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    font-medium py-2 transition-colors duration-200
                    ${isActive(link.href)
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-primary'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-text-secondary"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button fullWidth>Book Now</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
