import React from 'react';
import './App.css';
import MiDataTable from './components/datatable'; // Importar el componente de la tabla de usuarios

// Componente principal de la aplicación
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Renderizar el componente de la tabla de usuarios */}
        <MiDataTable />
      </header>
    </div>
  );
}

export default App; // Exportar el componente principal por defecto
