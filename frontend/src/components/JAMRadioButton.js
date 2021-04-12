import React from 'react';
import JAMCheckbox from './JAMCheckbox';
import JAMCol from './JAMCol';
import JAMRow from './JAMRow';
import './css/radiobutton.css'

const JAMRadioButton = ({ caption = 'Caption', options, selected, onChange = (e) => console.log(e), orientation = 'row', ...props }) => {
    return (
        <div className='radio'>
            <label className='radiolabel'>{caption}</label>
            { orientation == 'col' ? (
                <JAMCol float='left'>
                    {options.map(option => {
                        return (
                            <JAMRow onClick={() => onChange(option)} float='left' style={{ margin: "10px" }}>
                                <div className='back' >
                                    <div className={'front' + (selected == option ? ' front_active' : '')}></div>
                                </div>
                                <label className='caption'>
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </label>
                            </JAMRow>
                        );
                    })}
                </JAMCol>
            ) : (
                <JAMRow>
                    {options.map(option => {
                        return (
                            <JAMRow onClick={() => onChange(option)} float='left' style={{ margin: "10px" }}>
                                <div className='back' >
                                    <div className={'front' + (selected == option ? ' front_active' : '')}></div>
                                </div>
                                <label className='caption'>
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </label>
                            </JAMRow>
                        );
                    })}
                </JAMRow>
            )}
        </div>
    );
};

export default JAMRadioButton;