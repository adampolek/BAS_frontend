import React from 'react';
import './css/layout.css';

const JAMCol = ({float='center', ...props}) => {
    return (
        <div className={ 'col ' + float} style={props.style}>
            {props.children}
        </div>
    );
};

export default JAMCol;