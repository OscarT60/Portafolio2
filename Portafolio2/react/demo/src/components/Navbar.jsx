import React from 'react';

/**
 * Componente Navbar
 * @param {Function} setCurrentPage Función para establecer la página actual
 * @returns {JSX.Element} Elemento JSX que representa la barra de navegación
 */
export default function Navbar({ setCurrentPage }) {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Botón para ir a la página Home */}
              <li className="nav-item">
                <button className="nav-link active" onClick={() => setCurrentPage('home')}>Home</button>
              </li>
              {/* Botón para ir a la página Contact */}
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCurrentPage('contact')}>Contact</button>
              </li>
              {/* Agrega más botones para otras páginas si es necesario */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}




