import React from 'react';
import './css/button.css';

const JAMButton = ({disabled = false, value='Button', theme='normal', children, onClick, width='auto', ...props}) => {

    return (
        <button className={theme} style={{width: width, ...props.style}} onClick={onClick} disabled={disabled}>
            {children != null ? children : value}
        </button>
    );
}

export default JAMButton;