import React from 'react';
import './css/checkbox.css';
import JAMRow from './JAMRow';

const JAMCheckbox = ({caption='Checkbox', checked=false, width='auto', onClick, ...props}) => {

    return (
        <JAMRow onClick={onClick} width={width} float='left' style={{margin: "10px"}}>
            <div className={'back' + (checked ? ' back_active' : '')}>
                <div className={'front' + (checked ? ' front_active' : '')}></div>
            </div>
            <label className='caption'>
                {caption}
            </label>
        </JAMRow>
    );
}

export default JAMCheckbox;