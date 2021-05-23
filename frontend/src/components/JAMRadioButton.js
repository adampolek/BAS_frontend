import React from 'react';
import JAMCol from './JAMCol';
import JAMRow from './JAMRow';
import './css/radiobutton.css'

const JAMRadioButton = ({ caption = 'Caption', options, selected, onChange = (e) => console.log(e), orientation = 'row', width = '300px', ...props }) => {
    return (
        <div className='radio' style={{ width: width }}>
            <label className='radiolabel'>{caption}</label>
            { orientation === 'col' ? (
                <JAMCol float='left'>
                    {options.map(option => {
                        return (
                            <JAMRow key={option.charAt(0).toUpperCase() + option.slice(1)} onClick={() => onChange(option)} float='left' style={{ margin: "10px" }} >
                                <div className='back_radio' >
                                    <div className={'front_radio' + (selected === option ? ' front_radio_active' : '')}></div>
                                </div>
                                <label className='caption_radio'>
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
                            <JAMRow key={option.charAt(0).toUpperCase() + option.slice(1)} onClick={() => onChange(option)} float='left' style={{ margin: "10px" }} >
                                <div className='back_radio' >
                                    <div className={'front_radio' + (selected === option ? ' front_radio_active' : '')}></div>
                                </div>
                                <label className='caption_radio'>
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