import React, { useState } from 'react';
import JAMImage from './JAMImage';
import information from '../resources/information.svg';
import JAMLabel from './JAMLabel';
import JAMCol from './JAMCol';
import JAMPanel from './JAMPanel';

const JAMInfo = ({ message = "message", size = '20px', ...props }) => {
    const [show, setShow] = useState(false);
    return (
        <JAMCol>
            <div onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                {show ? (
                    <JAMPanel style={{ position: 'absolute' }} >
                        <JAMLabel caption={message} bold style={{margin: '10px'}} />
                    </JAMPanel>
                ) : (
                    <div />
                )}
                <JAMImage icon={information} width={size} />
            </div>
        </JAMCol>
    );
};

export default JAMInfo;