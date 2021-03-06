import React from 'react';
import './css/combobox.css';

const JAMCombobox = ({ caption = "Caption", elements = [], width = '250px', value = "", onChange = e => {}, onClick, ...props }) => {

    return (
        <div className='combobox'>
            <select onChange={onChange} value={value} float='left' style={{width: width, height: '100%' }} className="combo">
                {elements.map((el, i) => {
                    return (<option key={i} className='option' value={el}>{el}</option>);
                })}
            </select>
            <label className='caption_combo'>{caption}</label>
        </div>
    );
}

export default JAMCombobox;