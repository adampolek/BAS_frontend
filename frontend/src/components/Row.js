import React from 'react';
import './css/layout.css';

const Row = ({float='center', width="auto", onClick, ...props}) => {
    return (
        <div className={'row ' + float} style={props.style} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default Row;