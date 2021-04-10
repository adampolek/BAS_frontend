import React from 'react';
import './css/layout.css';

const Row = (props) => {
    return (
        <div className='row' style={props.style}>
            {props.children}
        </div>
    );
};

export default Row;