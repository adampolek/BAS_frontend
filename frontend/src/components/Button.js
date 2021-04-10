import React, { useState } from 'react';
import './css/button.css';

const Button = ({value='Button', theme='normal', children, onClick, width='auto', ...props}) => {

    return (
        <button className={theme} style={{width: width}} onClick={onClick} {...props}>
            {children != null ? children : value}
        </button>
    );
}

export default Button;