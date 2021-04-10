import React from 'react';
import './css/panel.css';

const Panel = ({width='auto', height='auto', float='center', backgroundColor= "#C0C0C0", ...props}) => {
    return (
        <div className={'panel ' + float} style={{width: width, height: height, backgroundColor: backgroundColor}}>
            {props.children}
        </div>
    )
}

export default Panel;