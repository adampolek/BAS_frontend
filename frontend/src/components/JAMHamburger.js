import React, { useState } from 'react';
import JAMCol from './JAMCol';
import JAMLine from './JAMLine';
import './css/hamburger.css';

const JAMHamburger = ({ TL = true, TR = false, BR = false, BL = false, ...props }) => {
    const [show, setShow] = useState(false);
    const width = '35px';
    const height = '7px';

    const changeBottom = {
        transform: ['rotate(45deg)', 'translate(-8px, -8px)']
    };
    return (
        <JAMCol float='left'>
            <JAMCol float='left' style={{ cursor: 'pointer', position: 'relative' }} onClick={() => setShow(!show)}>
                <JAMLine className={show ? 'top_line_active' : 'top_line'} color='purple' width={width} height={height} style={{ marginBottom: height }} />
                <JAMLine className={show ? 'center_line_active' : 'center_line'} color='purple' width={width} height={height} style={{ marginBottom: height }} />
                <JAMLine className={show ? 'bottom_line_active' : 'bottom_line'} color='purple' width={width} height={height} />
            </JAMCol>
            {show ? (
                <JAMCol style={{ position: 'relative' }}>
                    {props.children}
                </JAMCol>
            ) : (
                <div />
            )}
        </JAMCol>
    );
}



export default JAMHamburger;