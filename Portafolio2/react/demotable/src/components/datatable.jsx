import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

// Componente funcional para mostrar una tabla de usuarios
const MiDataTable = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar los datos de usuarios

  // Hook useEffect para cargar los datos de los usuarios al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch de los datos de usuarios desde la API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamada a la función fetchData
  }, []); // Se ejecuta solo al montar el componente, por lo que se pasa un array vacío como segundo argumento

  // Definición de las columnas de la tabla
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Nombre de Usuario',
      selector: 'username',
      sortable: true,
    },
    {
      name: 'Correo Electrónico',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Teléfono',
      selector: 'phone',
      sortable: true,
    },
  ];

  // Renderización del componente
  return (
    <div className="container">
      <h2>Usuarios</h2>
      <DataTable columns={columns} data={users} pagination />
    </div>
  );
};

export default MiDataTable; // Exportar el componente por defecto
