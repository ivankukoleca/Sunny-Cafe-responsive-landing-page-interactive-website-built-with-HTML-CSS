import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Coffee, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Coffee className="w-4 h-4" />
            <span className="text-sm font-medium">Artisan Coffee Since 2015</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            Sunny Cafe
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Where every cup tells a story. Experience the perfect blend of 
            handcrafted coffee, fresh pastries, and warm hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#menu">
                Explore Menu
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Visit Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
