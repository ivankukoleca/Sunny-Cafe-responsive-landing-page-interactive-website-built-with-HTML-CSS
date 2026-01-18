import { Heart, Leaf, Users } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every cup is crafted with love and dedication to perfection.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We source ethically and minimize our environmental footprint.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections one conversation at a time.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <img
                src={gallery1}
                alt="Sunny Cafe interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
              More Than Just Coffee
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015, Sunny Cafe began with a simple dream: to create 
                a warm, welcoming space where coffee lovers could gather, connect, 
                and savor exceptional brews.
              </p>
              <p>
                What started as a small corner shop has grown into a beloved 
                community hub. We source our beans directly from sustainable farms 
                across the globe, roasting them in small batches to bring out their 
                unique flavors and character.
              </p>
              <p>
                Every pastry is baked fresh each morning by our talented pastry 
                chef, using locally-sourced ingredients whenever possible. We 
                believe great coffee deserves great company.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-4 bg-card rounded-xl shadow-warm-sm"
                >
                  <value.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-display font-semibold text-foreground text-sm">
                    {value.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
