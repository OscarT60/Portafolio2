
import React, { useState } from 'react';

// Componente funcional para el formulario de registro
export default function Form(){

    // Estados para almacenar el nombre y apellido
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Función para manejar cambios en el nombre
    function handleFirstNameChange(e){
        setFirstName(e.target.value); 
    }

    // Función para manejar cambios en el apellido
    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    // Concatenación del nombre completo
    const fullName = firstName + ' ' + lastName;

    return(
        <>
            <h2>SignUp</h2>
            {/* Formulario con campos para el nombre y apellido */}
            <form action="" className="form">
                <label htmlFor="firstName">First Name : </label>
                <input type="text" value={firstName} onChange={handleFirstNameChange}/>

                <label htmlFor="lastName">Last Name : </label>
                <input type="text" value={lastName} onChange={handleLastNameChange}/>
            </form>

            {/* Mostrar el nombre completo */}
            <p>Welcome : <strong>{fullName}</strong></p>
        </>
    );
}
