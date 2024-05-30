
import React from 'react'
import './TextBox.css'

const TextBox = ({ label, placeholder, value, onChange }) => {
    return (
        <div className='textbox'>
        <p>{label}</p>
        <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
};

export default TextBox;
