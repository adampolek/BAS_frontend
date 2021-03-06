import React, { useState } from 'react';
import JAMCol from './JAMCol';
import JAMLine from './JAMLine';
import './css/hamburger.css';

const JAMHamburger = ({ TL = true, TR = false, BR = false, BL = false, color = 'purple', ...props }) => {
    const [show, setShow] = useState(false);
    const width = '35px';
    const height = '7px';
    var stylesHamburger, stylesMenu, stylesMenuActive;
    var float;

    if (BL) {
        stylesHamburger = { position: 'fixed', bottom: '20px', left: '20px', zIndex: '12' }
        stylesMenu = { position: 'absolute', transform: 'scale(0)', transition: '0.5s', bottom: '100%'}
        stylesMenuActive = { position: 'absolute', transform: 'scale(1)', transition: '0.5s', bottom: '100%' }
        float = 'left';
    } else if (TR) {
        stylesHamburger = { position: 'fixed', top: '20px', right: '20px', zIndex: '12' }
        stylesMenu = { position: 'relative', transform: 'scale(0)', transition: '0.5s' }
        stylesMenuActive = { position: 'relative', transform: 'scale(1)', transition: '0.5s' }
        float = 'right';
    } else if (BR) {
        stylesHamburger = { position: 'fixed', bottom: '20px', right: '20px', zIndex: '12' }  
        stylesMenu = { position: 'absolute', transform: 'scale(0)', transition: '0.5s', bottom: '100%'}
        stylesMenuActive = { position: 'absolute', transform: 'scale(1)', transition: '0.5s', bottom: '100%' }
        float = 'right';
    } else {
        stylesHamburger = { position: 'fixed', top: '20px', left: '20px', zIndex: '12' }
        stylesMenu = { position: 'relative', transform: 'scale(0)', transition: '0.5s' }
        stylesMenuActive = { position: 'relative', transform: 'scale(1)', transition: '0.5s' }
        float = 'left';
    }

    return (
        <JAMCol float={float} style={stylesHamburger}>
            <JAMCol float='left' style={{ cursor: 'pointer', position: 'relative' }} onClick={() => setShow(!show)}>
                <JAMLine className={show ? 'top_line_active' : 'top_line'} color={color} width={width} height={height} style={{ marginBottom: height }} />
                <JAMLine className={show ? 'center_line_active' : 'center_line'} color={color} width={width} height={height} style={{ marginBottom: height }} />
                <JAMLine className={show ? 'bottom_line_active' : 'bottom_line'} color={color} width={width} height={height} />
            </JAMCol>
            <JAMCol width={show ? 'auto' : '0px'} style={show ? stylesMenuActive : stylesMenu}>
                {props.children}
            </JAMCol>
        </JAMCol>
    );
}



export default JAMHamburger;