import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import htmlImage from '../../assets/html.png'; // Importa la imagen HTML
import reactImage from '../../assets/react.png'; // Importa la imagen de React
import py from '../../assets/py.png'; // Importa la imagen de Node.js
import javascriptImage from '../../assets/js.png'; // Importa la imagen de JavaScript

const technologies = [
  { name: 'React', image: reactImage },
  { name: 'Node.js', image: py },
  { name: 'JavaScript', image: javascriptImage },
  {name: 'htmlImage', image:htmlImage}
];

const TechnologiesCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div key={index}>
            <img src={tech.image} alt={tech.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologiesCarousel;
