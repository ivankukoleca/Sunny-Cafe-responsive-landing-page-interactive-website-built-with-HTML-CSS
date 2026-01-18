import { Calendar, Clock, Music, Gift, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventMusic from "@/assets/event-music.jpg";

const events = [
  {
    title: "Live Jazz Nights",
    description:
      "Join us every Friday for live jazz performances by local artists. Enjoy great music with your favorite coffee.",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    icon: Music,
    image: eventMusic,
    featured: true,
  },
  {
    title: "Latte Art Workshop",
    description:
      "Learn the art of creating beautiful latte designs from our expert baristas. All skill levels welcome!",
    date: "Jan 25, 2026",
    time: "2:00 PM - 4:00 PM",
    icon: BookOpen,
  },
  {
    title: "Happy Hour Special",
    description:
      "Get 20% off all cold drinks every weekday afternoon. The perfect pick-me-up!",
    date: "Mon - Fri",
    time: "3:00 PM - 5:00 PM",
    icon: Gift,
  },
];

const Events = () => {
  return (
    <section id="events" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            There's always something exciting happening at Sunny Cafe. 
            Join us for special events, workshops, and community gatherings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          <div className="lg:row-span-2">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
              <img
                src={events[0].image}
                alt={events[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Music className="w-4 h-4" />
                  Featured Event
                </div>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-3">
                  {events[0].title}
                </h3>
                <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                  {events[0].description}
                </p>
                <div className="flex flex-wrap gap-4 text-primary-foreground/90 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {events[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {events[0].time}
                  </span>
                </div>
                <Button variant="hero" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Other Events */}
          {events.slice(1).map((event) => (
            <div
              key={event.title}
              className="bg-card rounded-xl p-6 shadow-warm-sm card-hover flex gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <event.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-accent" />
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
