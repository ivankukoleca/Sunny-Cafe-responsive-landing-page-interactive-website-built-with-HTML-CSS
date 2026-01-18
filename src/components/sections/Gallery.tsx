import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";
import menuIced from "@/assets/menu-iced.jpg";

const images = [
  { src: gallery1, alt: "Cozy cafe atmosphere", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Expert barista at work", span: "col-span-1 row-span-1" },
  { src: menuLatte, alt: "Beautiful latte art", span: "col-span-1 row-span-1" },
  { src: gallery3, alt: "Fresh breakfast spread", span: "col-span-1 row-span-1" },
  { src: menuPastry, alt: "Fresh pastries", span: "col-span-1 row-span-1" },
  { src: menuIced, alt: "Refreshing iced coffee", span: "col-span-2 row-span-1" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Visual Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
            Our Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a peek inside Sunny Cafe. From our cozy corners to our 
            beautifully crafted drinks, every moment is picture-worthy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative rounded-xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
