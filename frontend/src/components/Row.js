import React from 'react';
import './css/layout.css';

const Row = ({float='center', ...props}) => {
    return (
        <div className={'row ' + float} style={props.style}>
            {props.children}
        </div>
    );
};

export default Row;