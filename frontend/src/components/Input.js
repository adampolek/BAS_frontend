import React, {useRef} from 'react';
import './css/input.css';

const Input = ({ caption = 'Holder', error='Error', showError=false, value, type='text', width="250px", onChange, ...props }) => {
    // focus input element on label click
    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef, setFocus ] 
    }
    const [inputRef, setInputFocus] = useFocus()
    return (
        <div style={{margin:'5px'}}>
        <div className='group'>
            <input style={{width: width}} id='value' type={type} className={(showError ? 'input_error' : '') + ' input'} 
                placeholder='text' value={value} onChange={onChange} {...props} ref={inputRef}/>
            <label className={(showError ? 'label_error' : '') + ' label'} onClick={setInputFocus} >{caption}</label>
        </div>
        <label hidden={!showError} className='error'>{error}</label>
        </div>
    );
};

export default Input;