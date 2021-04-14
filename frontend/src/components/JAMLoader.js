import React, { useEffect } from 'react';
import JAMLine from './JAMLine';
import './css/loader.css';
import JAMRow from './JAMRow';

const JAMLoader = ({ color = 'purple', width = '20px', height = '60px', show = true, ...props }) => {
    if (show) {
        return (
            <JAMRow style={{ margin: '10px' }}>
                <JAMLine style={{ marginRight: '10px' }} className='spinner1' height={height} width={width} color={color} />
                <JAMLine style={{ marginRight: '10px' }} className='spinner2' height={height} width={width} color={color} />
                <JAMLine style={{ marginRight: '10px' }} className='spinner3' height={height} width={width} color={color} />
                <JAMLine style={{ marginRight: '10px' }} className='spinner4' height={height} width={width} color={color} />
                <JAMLine className='spinner5' height={height} width={width} color={color} />
            </JAMRow>
        );
    }
    return (<div />);
};

export default JAMLoader;