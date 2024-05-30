
import React from 'react'

import './NumberBox.css'

// Generame un componente que se llame TextBox con un input y un label personalizables
// que se puedan pasar como props
//
// Ejemplo de uso:
// <TextBox label="Nombre" placeholder="Escribe tu nombre" />
//
// Debe renderizar:
// <label>Nombre</label>
// <input placeholder="Escribe tu nombre" />

const NumberBox = ({ label, placeholder, value, onChange }) => {
    return (
        <div className='numberbox'>
            <p>{label}</p>
            <input type="number" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
};

export default NumberBox;
