import Carousel from "../../Components/Carousel";

const Hero = () => {
  const slides = [
    { id: 1, src: "src/assets/Untitled.jpg" },
    // alt: "Descripción de la imagen 1",

    { id: 2, src: "src/assets/Untitled2.jpg" },
    // alt: "Descripción de la imagen 2",

    { id: 3, src: "src/assets/Untitled3.jpg" },
    // alt: "Descripción de la imagen 3",
  ];
  return (
    <div className="max-w-lg">
      <Carousel
        slides={slides.map((_, slide) => (
          <img src={slide.src} key={slide.id} />
        ))}
        autoSlide={true}
        autoSlideInterval={6000}
      ></Carousel>
    </div>
  );
};

export default Hero;
