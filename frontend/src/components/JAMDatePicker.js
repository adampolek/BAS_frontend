import React from 'react';
import JAMInput from './JAMInput';

const JAMDatePicker = ({onChange, value= new Date(),...props}) => {
    return (
        <JAMInput value={value} onChange={onChange} type='date' />
    );
};

export default JAMDatePicker;