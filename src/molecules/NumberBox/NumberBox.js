
import React from 'react'

import './NumberBox.css'

const NumberBox = ({ label, placeholder, value, onChange }) => {
    return (
        <div className='numberbox'>
            <p>{label}</p>
            <input type="number" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
};

export default NumberBox;
