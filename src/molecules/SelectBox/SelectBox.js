import React from 'react';
import './SelectBox.css';

const SelectBox = ({ label, placeholder, options, value, onChange }) => {
    
    return (
        <div className='selectbox'>
            <p>{ label }</p>
            <select value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}>
                {options.map((option, index) => (
                    <option key={index} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBox;