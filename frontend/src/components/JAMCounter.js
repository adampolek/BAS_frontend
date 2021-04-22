import React, { useState } from 'react';
import JAMButton from './JAMButton';
import JAMCol from './JAMCol';
import JAMLabel from './JAMLabel';
import JAMPanel from './JAMPanel';

const JAMCounter = ({ width='200px', caption='Caption', value = 0, steps = 1, min = 0, max = 1000, onClick = (e) => { console.log("Default get Value") }, ...props }) => {

    return (
        <JAMPanel width={width} float='left' style={{position: 'relative', paddingTop: '12px'}}>
            <label style={{marginLeft: '10px', position: 'absolute', top: '-13px', fontSize: 'var(--size_holder)', fontWeight: 'bold'}}>{caption}</label>
            <JAMCol>
                <JAMButton value='-' width='70px' theme='white' onClick={() => {
                    onClick(min <= value - steps ? value - steps : value);
                }} />
            </JAMCol>
            <JAMCol>
                <JAMLabel caption={value} style={{ width: '25px' }} />
            </JAMCol>
            <JAMCol>
                <JAMButton value='+' width='70px'  onClick={() => {
                    onClick(max >= value + steps ? value + steps : value);
                }} />
            </JAMCol>
        </JAMPanel>
    );
};

export default JAMCounter;