import './Carousel.css';

const Carousel = () => {
  const images = [
    { src: './html.png', alt: 'HTML' },
    { src: './css.png', alt: 'CSS' },
    { src: './js.png', alt: 'JavaScript' },
    { src: './React.png', alt: 'React' },
    { src: './angular.png', alt: 'Angular' },
    { src: './figma.png', alt: 'Figma' },
    { src: './ts.webp', alt: 'typescript' },
    { src: './node.png', alt: 'node' },
    { src: './python.png', alt: 'python' },
    { src: './c++.png', alt: 'C++' },
    { src: './java.png', alt: 'java' },
    { src: './sql.png', alt: 'sql' },
    { src: './pytorch.png', alt: 'pytorch' },
    { src: './tensorflow.png', alt: 'tensorflow' },
    { src: './git.png', alt: 'git' },
    { src: './mongo.webp', alt: 'mongo' },
    { src: './flutter.png', alt: 'flutter' },
    { src: './firebase.png', alt: 'firebase' },
    
  ];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {images.map((image, index) => (
          <img key={index} className="carousel-image" src={image.src} alt={image.alt} />
        ))}
        {images.map((image, index) => (
          <img key={`duplicate-${index}`} className="carousel-image" src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
