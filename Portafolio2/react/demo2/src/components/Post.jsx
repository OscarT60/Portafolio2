import { useState, useEffect } from 'react';
import '../App.css';

// Definir la URL de la API
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

// Componente funcional para obtener datos de la API
export default function Post() {
  // Estados para almacenar los datos, el estado de carga y los errores
  const [data, SetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    // Realizar la solicitud a la API
    fetch(url)
      .then(response => response.json())
      .then(result => {
        // Actualizar el estado con los datos recibidos
        setIsLoading(false);
        SetData(result);
      }, error => {
        // Manejar los errores
        setIsLoading(false);
        setError(error);
      })
  },[]);

  // Función para mostrar el contenido según el estado de carga y los errores
  const getContent = () => {
    // Si está cargando, mostrar un mensaje de carga
    if (isLoading) {
      return (
        <div className="App">
          <h4>Loading Data ...</h4>
          <progress value={null} />
        </div>
      );
    }

    // Si hay un error, mostrar un mensaje de error
    if (error) {
      return <h4>Error</h4>
    }

    // Si hay datos, mostrar la tabla con los datos
    return (
      <div className="App">
        <h1>Social Network UTT</h1>
        <h3>TSU EVND</h3>
        
        <div className='row'>
          {/* Diseñar la estructura de la tabla */}
          <div className="col-2"></div>
          <div className="col-8">
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>POST ID</th>
                  <th>USER ID</th>
                  <th>POST TITLE</th>
                  <th>POST BODY</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapear los datos y mostrar cada fila de la tabla */}
                {data && data.forEach(element => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.userId}</td>
                    <td>{element.title}</td>
                    <td>{element.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {getContent()}
    </div>
  );
}
