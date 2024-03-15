import React from 'react';

// Componente funcional para el footer
export default function Footer() {
  return (
    // Definición del footer con estilos y enlaces
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        {/* Texto del footer con un enlace */}
        CelMexXBootstrap:
        <a className="text-body" href="https://mdbootstrap.com/">CelMexOficial</a>
      </div>
    </footer>
  );
}
