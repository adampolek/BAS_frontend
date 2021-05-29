import React from 'react';
import JAMCol from './JAMCol';
import JAMLabel from './JAMLabel';
import add from '../resources/add.svg';
import subtract from '../resources/subtract.svg';
import JAMImage from './JAMImage';
import JAMRow from './JAMRow';
import JAMButton from './JAMButton';

const JAMCounter = ({ width = '300px', caption = 'Caption', value = 0.0, steps = 1.0, unit = '', min = 0, max = 1000, onClick = (e) => { }, ...props }) => {
    return (
        <div style={{ position: 'relative', paddingTop: '12px', width: width }}>
            <JAMRow width={width}>
                <label style={{ marginLeft: '10px', position: 'absolute', top: '-13px', fontSize: 'var(--size_holder)', fontWeight: 'bold' }}>{caption}</label>
                <JAMCol float='left'>
                    <JAMButton theme='white' onClick={() => {
                        onClick(min <= value - steps ? value - steps : value);
                    }}>
                        <JAMImage icon={subtract}  width='20px' style={{margin: '5px'}} />
                    </JAMButton>
                </JAMCol>
                <JAMCol>
                    <JAMLabel caption={value + unit} />
                </JAMCol>
                <JAMCol float='right'>
                    <JAMButton theme='white' onClick={() => {
                            onClick(max >= value + steps ? value + steps : value);
                        }}>
                        <JAMImage icon={add} width='20px' style={{margin: '5px'}} />
                    </JAMButton>
                </JAMCol>
            </JAMRow>
        </div>
    );
};

export default JAMCounter;