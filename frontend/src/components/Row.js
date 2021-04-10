import React from 'react';
import './css/layout.css';

const Row = ({float='center', onClick, ...props}) => {
    return (
        <div className={'row ' + float} style={props.style} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default Row;