import React, { useState } from 'react';
import './css/button.css';

const Button = ({value='Button', theme='normal', children, onClick, ...props}) => {

    return (
        <button className={theme} onClick={onClick} {...props}>
            {children != null ? children : value}
        </button>
    );
}

export default Button;