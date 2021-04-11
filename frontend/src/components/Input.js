import React, {useRef, useState} from 'react';
import './css/input.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Input = ({ caption = 'Holder', error='Error', showError=false, value, type='text', width="250px", onChange, onInput, ...props }) => {
    const [passwordShown, setPasswordShown] = useState(type =="password" ? false : true);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
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
            <input style={{width: width}} id='value' type={passwordShown ? "text" : "password"} className={(showError ? 'input_error' : '') + ' input'} 
                placeholder='text' value={value} onChange={onChange} onInput={onInput} {...props} ref={inputRef}/>
            <label className={(showError ? 'label_error' : '') + ' label'} onClick={setInputFocus} >{caption}</label>
            <i onClick={togglePasswordVisiblity} style={type != "password" ? {visibility: "hidden"} : {visibility: "visible"}}>{eye}</i>
        </div>
        <label hidden={!showError} className='error'>{error}</label>
        </div>
    );
};

export default Input;