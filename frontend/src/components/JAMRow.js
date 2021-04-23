import React from 'react';
import './css/layout.css';

const JAMRow = ({float='center', width="auto", height='auto', onClick, ...props}) => {
    return (
        <div className={'row ' + float} style={{width: width, height: height, ...props.style}} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default JAMRow;