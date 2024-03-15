import { useState, useEffect } from 'react';
import '../App.css';

// URL de la API para obtener el precio actual de Bitcoin
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

// Componente funcional para mostrar el precio actual de Bitcoin en diferentes monedas
export default function Btc2() {
  // Estados para almacenar los datos, el estado de carga y los errores
  const[data, SetData] = useState(null);
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

    // Si hay datos, mostrar la tabla con los precios de Bitcoin en diferentes monedas
    return (
      <div className="App">
        <h1>BTC to USD |EUR |GBP</h1>
        <h3>BTC to USD</h3>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>RATE</th>
                  <th>RATE FLOAT</th>
                  <th>DESCRIPTION</th>
                  <th>UPDATE</th>
                </tr>
              </thead>
              <tbody>
                {/* Mostrar los datos de Bitcoin en diferentes monedas */}
                <tr>
                  <td>{data["bpi"]["USD"].rate}</td>
                  <td>{data["bpi"]["USD"].rate_float}</td>
                  <td>{data["bpi"]["USD"].description}</td>
                  <td>{data["time"].updated}</td>
                </tr>
                <tr>
                  <td>{data["bpi"]["EUR"].rate}</td>
                  <td>{data["bpi"]["EUR"].rate_float}</td>
                  <td>{data["bpi"]["EUR"].description}</td>
                  <td>{data["time"].updated}</td>
                </tr>
                <tr>
                  <td>{data["bpi"]["GBP"].rate}</td>
                  <td>{data["bpi"]["GBP"].rate_float}</td>
                  <td>{data["bpi"]["GBP"].description}</td>
                  <td>{data["time"].updated}</td>
                </tr>
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
