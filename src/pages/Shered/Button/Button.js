import React from 'react';
import './Button.css'

const Button = ({title}) => {
    return (
        <button className='btn all-button'>
            {title}
        </button>
    );
};

export default Button;