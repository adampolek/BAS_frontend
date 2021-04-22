import React, { useState } from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import API from "../api/API";
import JAMRow from '../components/JAMRow';
import JAMImage from '../components/JAMImage';
import forgotPassword from '../resources/password.svg'
import JAMLine from '../components/JAMLine';
import JAMLabel from '../components/JAMLabel';
import JAMLoader from '../components/JAMLoader';
import JAMLink from '../components/JAMLink';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorEmailString, setShowErrorEmailString] = useState('');

    const sendForgotPassword = async () => {
        setIsLoading(true);
        API.post("bas/user/forgot-password", { email: email }).then(res => {
            console.log(res);
            setIsLoading(false);
        })
    }
    let disabled = email.length === 0 || showErrorEmail;
    return (
        <JAMRow style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"} style={{ position: "absolute" }}>
                <JAMPanel width={"90%"} height='90%' maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                    <JAMCol>
                        <JAMRow>
                            <JAMLabel style={{ padding: "10px" }} caption='Forgot Password?' header />
                        </JAMRow>
                        <JAMRow>
                            <JAMLine />
                            <JAMLabel style={{ padding: "20px" }} caption='TYPE YOUR EMAIL' color='#E0E0E0' />
                            <JAMLine />
                        </JAMRow>
                        <JAMInput caption='Email' width="300px" value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            error={showErrorEmailString} showError={showErrorEmail}
                            onInput={(e) => {
                                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if (!re.test(e.target.value)) {
                                    setShowErrorEmail(true);
                                    setShowErrorEmailString("Entered string is not a valid email");
                                } else {
                                    setShowErrorEmail(false);
                                }
                            }} onKeyPress={e => {
                                if (e.key === 'Enter' && !disabled) {
                                    setEmail(e.target.value)
                                    sendForgotPassword()
                                }
                            }} />
                        <JAMRow style={{ width: "100%", paddingTop: "20px" }}>
                            <JAMButton width='100%' value='Send' onClick={() => sendForgotPassword()} disabled={disabled} />
                        </JAMRow>
                        <JAMRow>
                            <JAMLoader show={isLoading} />
                        </JAMRow>
                        <JAMRow style={{ paddingTop: "40px" }}>
                            <JAMLabel style={{ padding: "10px" }} caption="Go back to " />
                            <JAMLink href='/login' caption='Sign in!' />
                        </JAMRow>
                    </JAMCol>
                    <JAMCol>
                        <JAMRow width='250px' style={{ borderRadius: '50%', backgroundColor: 'purple', padding: '50px' }}>
                            <JAMImage icon={forgotPassword} note='Login icon' />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMPanel>
        </JAMRow>
    );
}

export default ForgotPassword;