import React from 'react';
import JAMCol from './JAMCol';
import JAMLabel from './JAMLabel';
import add from '../resources/add.svg';
import subtract from '../resources/subtract.svg';
import JAMImage from './JAMImage';
import JAMRow from './JAMRow';

const JAMCounter = ({ width='300px', caption='Caption', value = 0.0, steps = 1.0, unit='', min = 0, max = 1000, onClick = (e) => {}, ...props }) => {
    return (
        <div style={{position: 'relative', paddingTop: '12px', width:width}}>
            <JAMRow>
            <label style={{marginLeft: '10px', position: 'absolute', top: '-13px', fontSize: 'var(--size_holder)', fontWeight: 'bold'}}>{caption}</label>
            <JAMCol>
                <JAMImage icon={subtract} width='30px' onClick={() => {
                    onClick(min <= value - steps ? value - steps : value);
                }} />
            </JAMCol>
            <JAMCol>
                <JAMLabel caption={value + unit} />
            </JAMCol>
            <JAMCol>
                <JAMImage icon={add} width='30px'  onClick={() => {
                    onClick(max >= value + steps ? value + steps : value);
                }} />
            </JAMCol>
            </JAMRow>
        </div>
    );
};

export default JAMCounter;