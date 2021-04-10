import React, { useState } from 'react';
import './css/checkbox.css';
import Row from './Row';

const Checkbox = ({caption='Checkbox', checked=false, width='auto', onClick, ...props}) => {

    return (
        <Row onClick={onClick} width={width} float='left' style={{margin: "10px"}}>
            <div className={'back' + (checked ? ' back_active' : '')}>
                <div className={'front' + (checked ? ' front_active' : '')}></div>
            </div>
            <label className='caption'>
                {caption}
            </label>
        </Row>
    );
}

export default Checkbox;