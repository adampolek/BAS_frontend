import React from 'react';
import './css/layout.css';

const Col = ({float='center', ...props}) => {
    return (
        <div className={ 'col ' + float} style={props.style}>
            {props.children}
        </div>
    );
};

export default Col;