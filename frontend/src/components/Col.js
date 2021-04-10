import React from 'react';
import './css/layout.css';

const Col = (props) => {
    return (
        <div className='col' style={props.style}>
            {props.children}
        </div>
    );
};

export default Col;