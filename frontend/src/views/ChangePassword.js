import React, { useState } from 'react';
import JAMButton from '../components/JAMButton';
import { useLocation } from "react-router-dom";
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import API from "../api/API";
import JAMImage from '../components/JAMImage';
import lock from '../resources/padlock.svg'
import JAMLine from '../components/JAMLine';
import JAMLabel from '../components/JAMLabel';
import JAMRow from '../components/JAMRow';
import JAMLink from '../components/JAMLink';
import JAMLoader from '../components/JAMLoader';

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [showErrorPasswordString, setShowErrorPasswordString] = useState('');

    const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);
    const [showErrorConfirmPasswordString, setShowErrorConfirmPasswordString] = useState('');

    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');

    const resetPassword = async () => {
        setIsLoading(true);
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
            API.post('/bas/user/reset-password', { password: password, token: token })
                .then((res) => {
                    document.location.href = "/";
                    setIsLoading(false);
                }).catch(error => {
                    setIsLoading(false);
                });
        }
    }

    let disabled = showErrorPassword || showErrorConfirmPassword || password.length === 0 || confirmPassword.length === 0;
    return (
        <JAMRow style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <JAMPanel width={"90%"} height={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                    <JAMCol>
                        <JAMRow width='250px' style={{ borderRadius: '50%', backgroundColor: 'purple', padding: '50px' }}>
                            <JAMImage icon={lock} scale width='100%' />
                        </JAMRow>
                    </JAMCol>
                    <JAMCol>
                        <JAMRow>
                            <JAMLabel style={{ padding: "10px" }} caption='Password Reset' header />
                        </JAMRow>
                        <JAMRow>
                            <JAMLine />
                            <JAMLabel style={{ padding: "20px" }} caption='CHANGE YOUR PASSWORD' color='#E0E0E0' />
                            <JAMLine />
                        </JAMRow>
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
                            onChange={(e) => setPassword(e.target.value)} />
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
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }

                            }
                            onKeyPress={e => {
                                if (e.key === 'Enter' && !disabled) {
                                    setConfirmPassword(e.target.value);
                                    resetPassword();
                                }
                            }} />
                        <JAMRow style={{ width: "100%", paddingTop: "20px" }}>
                            <JAMButton width='100%' value='Save' onClick={() => resetPassword()} disabled={disabled} />
                        </JAMRow>
                        <JAMRow>
                            <JAMLoader show={isLoading} />
                        </JAMRow>
                        <JAMRow style={{ paddingTop: "40px" }}>
                            <JAMLabel style={{ padding: "10px" }} caption="Go back to " />
                            <JAMLink href='/login' caption='Sign in!' />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMPanel>
        </JAMRow>
    );
}

export default ChangePassword;