import React, { useState } from 'react';
import JAMImage from './JAMImage';
import information from '../resources/information.svg';
import JAMLabel from './JAMLabel';
import JAMCol from './JAMCol';
import JAMPanel from './JAMPanel';
import { Text } from 'react-native';

const JAMInfo = ({ message = "message", bold = false, size = '20px', widthPanel = '300px', ...props }) => {
    const [show, setShow] = useState(false);
    return (
        <JAMCol style={{position:'relative'}}>
            <JAMCol>
                <JAMImage icon={information} width={size} onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }} />
            </JAMCol>
            <JAMCol style={{position: 'absolute', top:size, right:'-' + size}} width='auto'>
                {show ? (
                    <JAMPanel style={{ position: 'relative', zIndex: '1' }} width={widthPanel} >
                        <JAMLabel caption={<Text style={{ fontWeight: bold ? 'bold' : '', fontSize: '18px', }}>{message}</Text>} bold style={{ margin: '10px', maxWidth: '300px' }} />
                    </JAMPanel>
                ) : (
                    <div />
                )}
            </JAMCol>
        </JAMCol>
    );
};

export default JAMInfo;