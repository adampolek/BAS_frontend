import React from 'react';

const JAMHamburger = (props) => {
    const container = {
        cursor: 'pointer'
    };

    const bar = {
        width: '35px',
        height: '5px',
        backgroundColor: '#FFFFFF',
        margin: '6px 0'
        };

    const changeTop = {
        transform: ['rotate(-45deg)', 'translate(-9px, 6px)']
    }

    const changeCenter = { opacity: 0 };

    const changeBottom = {
        transform: ['rotate(45deg)', 'translate(-8px, -8px)']
    };
    return (
        <div>
            <div class={container}>
                <div id='top' class={bar}></div>
                <div id='center' class={bar}></div>
                <div id='bottom' class={bar}></div>
            </div>
        </div>
    )
}



export default JAMHamburger;