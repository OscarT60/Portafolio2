import React, { useState } from 'react';
import image1 from '../assets/images/image1.jpg'; // Importar la primera imagen del carrusel
import image2 from '../assets/images/image2.jpg'; // Importar la segunda imagen del carrusel
import image3 from '../assets/images/image3.jpg'; // Importar la tercera imagen del carrusel

// Definir un arreglo de imágenes
const images = [image1, image2, image3];

// Componente funcional para el carrusel de imágenes
export default function Carousel() {
  // Estado para almacenar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Mapear las imágenes y mostrarlas en el carrusel */}
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* Botón para ir a la imagen anterior */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={goToPrevious}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* Botón para ir a la siguiente imagen */}
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={goToNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
