import React from 'react';
import './css/input.css';

const Input = ({ label = 'Holder', error='Error', showError=false, value, type='text', ...props }) => {
    return (
        <div style={{margin:'5px'}}>
        <div className='group'>
            <input id='value' type={type} className={(showError ? 'input_error' : '') + ' input'} placeholder='text' value={value} {...props} />
            <label for='value' className={(showError ? 'label_error' : '') + ' label'}>{label}</label>
        </div>
        <label hidden={!showError} for='value' className='error'>{error}</label>
        </div>
    );
};

export default Input;