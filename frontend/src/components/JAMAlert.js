import React from 'react';
import JAMButton from './JAMButton';
import JAMCol from './JAMCol';
import JAMLabel from './JAMLabel';
import JAMPanel from './JAMPanel';
import JAMRow from './JAMRow';

const JAMAlert = ({ block = false, backgroundColor = 'white', fontColor = 'black', show = true, onClick = () => {}, message = 'Message', width = '70%', height = 'auto', ...props }) => {
    if (show) {
        if (block){
        return (
            <div style={{ top:'0', bottom: '0', left: '0', right: '0', backgroundColor: '#000000AA', position: 'fixed', zIndex:'2', display: 'block'}}>
                <JAMPanel width={width} height={height} backgroundColor={backgroundColor} style={{margin: 'auto' }}>
                    <JAMCol float='left' style={{ margin: '10px' }} width={'100%'}>
                        <JAMRow float='left' width={'100%'}>
                            <JAMLabel big caption={message} right color={fontColor} style={{ width: '100%' }} />
                        </JAMRow>
                    </JAMCol>
                    <JAMCol float='right' style={{ marginBottom: '10px', marginRight: '10px' }} width={'100%'}>
                        <JAMRow float='right' width={'100%'}>
                            <JAMButton value='Close' onClick={onClick} />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </div>
        );
        }
        return(
            <JAMPanel width={width} height={height} backgroundColor={backgroundColor} style={{position:'absolute', top:'0', margin: 'auto', zIndex:'2' }}>
                    <JAMCol float='left' style={{ margin: '10px' }} width={'100%'}>
                        <JAMRow float='left' width={'100%'}>
                            <JAMLabel big caption={message} right color={fontColor} style={{ width: '100%' }} />
                        </JAMRow>
                    </JAMCol>
                    <JAMCol float='right' style={{ marginBottom: '10px', marginRight: '10px' }} width={'100%'}>
                        <JAMRow float='right' width={'100%'}>
                            <JAMButton value='Close' onClick={onClick} />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
        );
    }
    return (<div />);
};

export default JAMAlert;