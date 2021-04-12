import React, { useRef, useState } from 'react';
import './css/input.css';
import eye from '../resources/visibility.png';
import eyeSlash from '../resources/invisible.png';
import JAMImage from './JAMImage';

const JAMInput = ({ caption = 'Holder', error = 'Error', showError = false, value, type = 'text', width = "250px", onChange, onInput, ...props }) => {
    const [passwordShown, setPasswordShown] = useState(type == "password" ? false : true);

    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

        return [htmlElRef, setFocus]
    }
    const [inputRef, setInputFocus] = useFocus();
    return (
        <div style={{ margin: '5px' }}>
            <div className='group'>
                <input style={{ width: width }} id='value' type={type == 'password' ? passwordShown ? "text" : "password" : type} className={(showError ? 'input_error' : '') + ' input'}
                    placeholder='text' value={value} onChange={onChange} onInput={onInput} {...props} ref={inputRef} />
                <JAMImage onClick={() => { setPasswordShown(!passwordShown); }} style={type != "password" ? { visibility: "hidden" } : { visibility: "visible" }} icon={passwordShown ? eye : eyeSlash} note='Change visibility' className='eye' width='25px' height='25px' />
                <label className={(showError ? 'label_error' : '') + ' label'} onClick={setInputFocus} >{caption}</label>
            </div>
            <label hidden={!showError} className='error'>{error}</label>
        </div>
    );
};

export default JAMInput;