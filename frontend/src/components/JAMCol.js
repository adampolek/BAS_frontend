import React from 'react';
import './css/layout.css';

const JAMCol = ({float='center', width='auto', style, ...props}) => {
    return (
        <div className={ 'col ' + float} style={{width:width, ...style}}>
            {props.children}
        </div>
    );
};

export default JAMCol;