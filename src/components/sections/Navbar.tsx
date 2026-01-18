import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-warm-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Coffee
            className={`w-8 h-8 transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            } group-hover:text-accent`}
          />
          <span
            className={`font-display text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Sunny Cafe
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium text-sm transition-colors duration-300 link-underline ${
                  isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md shadow-warm-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
