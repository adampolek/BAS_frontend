import React, {useState} from 'react';
import JAMButton from '../components/JAMButton';
import {useLocation} from "react-router-dom";
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import API from "../api/API";

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [showErrorPasswordString, setShowErrorPasswordString] = useState('');

    const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);
    const [showErrorConfirmPasswordString, setShowErrorConfirmPasswordString] = useState('');

    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');

    const resetPassword = async () => {
        let register = true;
        setShowErrorConfirmPassword(false);
        setShowErrorPassword(false);
        if (password.trim() !== confirmPassword.trim()) {
            register = false;
            setShowErrorConfirmPassword(true);
        }
        if (password.length < 8) {
            register = false;
            setShowErrorPassword(true);
        }
        if (register) {
            API.post('/bas/user/reset-password', {password: password, token: token})
                .then((res) => {
                    console.log(res);
                    document.location.href = "/";
                })
        }
    }

    return (
        <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"} style={{position: "absolute"}}>
            <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                <JAMCol>
                    <JAMInput caption='Password' width="300px" type='password' onInput={(e) => {
                        const re = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/;
                        if (e.target.value.length < 8) {
                            setShowErrorPassword(true);
                            setShowErrorPasswordString("Password must be at least 8 characters long");
                        } else if (!re.test(e.target.value)) {
                            setShowErrorPassword(true);
                            setShowErrorPasswordString("Password must have: 1 uppercase letter, 1 special symbol, 1 digit")
                        } else {
                            setShowErrorPassword(false);
                        }
                    }} value={password} showError={showErrorPassword}
                              error={showErrorPasswordString}
                              onChange={(e) => setPassword(e.target.value)}/>
                    <JAMInput caption='Confirm password' width="300px" type='password'
                              showError={showErrorConfirmPassword}
                              error={showErrorConfirmPasswordString} onInput={(e) => {
                        if (e.target.value !== password) {
                            setShowErrorConfirmPassword(true);
                            setShowErrorConfirmPasswordString("Passwords are not identical");
                        } else {
                            setShowErrorConfirmPassword(false);
                        }
                    }}
                              onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <JAMButton value='Save' onClick={() => resetPassword()}/>
                </JAMCol>
                <JAMCol>

                </JAMCol>
            </JAMPanel>
        </JAMPanel>
    );
}

export default ChangePassword;