import React, { useState } from 'react';
import JAMCol from './JAMCol';
import JAMLine from './JAMLine';
import './css/hamburger.css';
import JAMButton from './JAMButton';

const JAMHamburger = ({ TL = true, TR = false, BR = false, BL = false, color = 'purple', ...props }) => {
    const [show, setShow] = useState(false);
    const width = '35px';
    const height = '7px';
    var stylesHamburger, stylesMenu, stylesMenuActive;
    var float;

    if (BL) {
        stylesHamburger = { position: 'absolute', bottom: '20px', left: '20px' }
        stylesMenu = { position: 'absolute', transform: 'scale(0)', transition: '0.5s', bottom: '100%'}
        stylesMenuActive = { position: 'absolute', transform: 'scale(1)', transition: '0.5s', bottom: '100%', zIndex: '1' }
        float = 'left';
    } else if (TR) {
        stylesHamburger = { position: 'absolute', top: '20px', right: '20px' }
        stylesMenu = { position: 'relative', transform: 'scale(0)', transition: '0.5s' }
        stylesMenuActive = { position: 'relative', transform: 'scale(1)', transition: '0.5s', zIndex: '1' }
        float = 'right';
    } else if (BR) {
        stylesHamburger = { position: 'absolute', bottom: '20px', right: '20px' }  
        stylesMenu = { position: 'absolute', transform: 'scale(0)', transition: '0.5s', bottom: '100%'}
        stylesMenuActive = { position: 'absolute', transform: 'scale(1)', transition: '0.5s', bottom: '100%', zIndex: '1' }
        float = 'right';
    } else {
        stylesHamburger = { position: 'absolute', top: '20px', left: '20px' }
        stylesMenu = { position: 'relative', transform: 'scale(0)', transition: '0.5s' }
        stylesMenuActive = { position: 'relative', transform: 'scale(1)', transition: '0.5s', zIndex: '1' }
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