import React from 'react';
import './css/layout.css';

const JAMCol = ({float='center', width='auto', style, onClick, ...props}) => {
    return (
        <div className={ 'col ' + float} style={{width:width, ...style}} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default JAMCol;