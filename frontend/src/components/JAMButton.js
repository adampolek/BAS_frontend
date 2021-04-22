import React, { useState } from 'react';
import './css/button.css';

const JAMButton = ({disabled = false, value='Button', theme='normal', children, onClick, width='auto', ...props}) => {

    return (
        <button className={theme} style={{width: width}} onClick={onClick} disabled={disabled} {...props}>
            {children != null ? children : value}
        </button>
    );
}

export default JAMButton;