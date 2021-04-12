import React from 'react';
import './css/panel.css';

const JAMPanel = ({width='auto', height='auto', float='center', backgroundColor= "#C0C0C0", minWidth= "0%", maxWidth= "100%", 
        minHeight= "0%", maxHeight= "100%", ...props}) => {
    return (
        <div className={'panel ' + float} style={{width: width, height: height, backgroundColor: backgroundColor,
            minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight}}>
            {props.children}
        </div>
    )
}

export default JAMPanel;