import React from 'react';
import JAMCheckbox from './JAMCheckbox';
import JAMCol from './JAMCol';
import JAMRow from './JAMRow';

const JAMRadioButton = ({ options, selected, onChange=(e) => console.log(e), orientation = 'row', ...props }) => {
    return (
        <div >
            { orientation == 'col' ? (
                <JAMCol>
                    {options.map(option => {
                        return (<JAMCheckbox caption={option.charAt(0).toUpperCase() + option.slice(1)} checked={selected == option} onClick={() => onChange(option)} />);
                    })}
                </JAMCol>
            ) : (
                <JAMRow>
                    {options.map(option => {
                        return (<JAMCheckbox caption={option.charAt(0).toUpperCase() + option.slice(1)} checked={selected == option} onClick={() => onChange(option)}  />);
                    })}
                </JAMRow>
            )}
        </div>
    );
};

export default JAMRadioButton;