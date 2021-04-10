import React from 'react';
import './css/input.css';

const Input = ({ caption = 'Holder', error='Error', showError=false, value, type='text', width="250px", onChange, ...props }) => {
    return (
        <div style={{margin:'5px'}}>
        <div className='group'>
            <input style={{width: width}} id='value' type={type} className={(showError ? 'input_error' : '') + ' input'} placeholder='text' value={value} onChange={onChange} {...props} />
            <label className={(showError ? 'label_error' : '') + ' label'}>{caption}</label>
        </div>
        <label hidden={!showError} className='error'>{error}</label>
        </div>
    );
};

export default Input;