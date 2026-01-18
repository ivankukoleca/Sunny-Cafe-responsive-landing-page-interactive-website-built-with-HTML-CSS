import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Coffee Enthusiast",
    content:
      "The best latte I've ever had! The atmosphere is so warm and welcoming. I come here every morning before work.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James L.",
    role: "Local Resident",
    content:
      "Sunny Cafe has become my second home. The staff remembers my order, and the pastries are always fresh. Highly recommend!",
    rating: 5,
    avatar: "JL",
  },
  {
    name: "Emily R.",
    role: "Remote Worker",
    content:
      "Perfect spot for working remotely. Great WiFi, comfortable seating, and the most amazing cold brew. Can't recommend enough!",
    rating: 5,
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What People Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Customer Love
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our wonderful 
            customers have to say about their Sunny Cafe experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-warm-sm card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-accent-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
