import React from 'react';
import imate from '../assets/imate.jpg'; // Corrección de la ruta de la imagen

/**
 * Componente Image
 * @returns {JSX.Element} Elemento JSX que representa una imagen
 */
export default function Image() {
    return (
        <div>
            {/* Utiliza la imagen importada como src */}
            <img src={imate} alt="Image" style={styles.reSize} /> {/* Agrega el estilo reSize */}
        </div>
    );
}

// Estilos del componente
const styles = {
    reSize: {
        width: 10,
        height: 100,
        paddingTop: 50,
        borderRadius: '50px',
        backgroundColor: 'blue',
        boxShadow: '0 4px 8px 0 rgba()' // Agrega los valores para el boxShadow
    }
};
