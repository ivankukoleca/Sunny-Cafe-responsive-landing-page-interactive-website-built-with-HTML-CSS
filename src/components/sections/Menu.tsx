import menuLatte from "@/assets/menu-latte.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";
import menuIced from "@/assets/menu-iced.jpg";

const menuCategories = [
  {
    title: "Coffee",
    items: [
      {
        name: "Signature Latte",
        description: "Smooth espresso with velvety steamed milk and beautiful latte art",
        price: "$5.50",
        image: menuLatte,
      },
      {
        name: "Espresso",
        description: "Rich and bold, made from our house-roasted beans",
        price: "$3.50",
        image: menuLatte,
      },
      {
        name: "Cappuccino",
        description: "Classic Italian style with perfect foam",
        price: "$5.00",
        image: menuLatte,
      },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      {
        name: "Iced Caramel Macchiato",
        description: "Espresso layered with vanilla and caramel over ice",
        price: "$6.00",
        image: menuIced,
      },
      {
        name: "Cold Brew",
        description: "Slow-steeped for 24 hours for ultimate smoothness",
        price: "$5.00",
        image: menuIced,
      },
      {
        name: "Iced Matcha Latte",
        description: "Premium Japanese matcha with your choice of milk",
        price: "$5.50",
        image: menuIced,
      },
    ],
  },
  {
    title: "Pastries",
    items: [
      {
        name: "Butter Croissant",
        description: "Flaky, golden, and baked fresh every morning",
        price: "$4.00",
        image: menuPastry,
      },
      {
        name: "Chocolate Muffin",
        description: "Rich double chocolate with chocolate chips",
        price: "$4.50",
        image: menuPastry,
      },
      {
        name: "Almond Danish",
        description: "Sweet almond cream in buttery puff pastry",
        price: "$4.50",
        image: menuPastry,
      },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            The Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafted with care using the finest ingredients. Every item is made 
            fresh and served with love.
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="font-display text-2xl font-semibold text-primary mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="group bg-card rounded-xl overflow-hidden shadow-warm-sm card-hover"
                    style={{
                      animationDelay: `${(categoryIndex * 3 + itemIndex) * 100}ms`,
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-display text-lg font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <span className="text-accent font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
