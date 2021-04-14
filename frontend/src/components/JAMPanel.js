import React from 'react';
import './css/panel.css';

const JAMPanel = ({width='auto', height='auto', float='center', backgroundColor= "white", minWidth= "0%", maxWidth= "100%", 
        minHeight= "0%", maxHeight= "100%", style, ...props}) => {
    return (
        <div className={'panel ' + float} style={{width: width, height: height, backgroundColor: backgroundColor,
            minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight, ...style}}>
            {props.children}
        </div>
    )
}

export default JAMPanel;