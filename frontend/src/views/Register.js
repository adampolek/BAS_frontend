import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import JAMRow from '../components/JAMRow';
import JAMImage from '../components/JAMImage';
import JAMLine from '../components/JAMLine';
import JAMLabel from '../components/JAMLabel';
import logo from '../resources/login_background.png'
import React, {useState} from 'react';
import API from "../api/API";

const Register = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showErrorUsername, setShowErrorUsername] = useState(false);
    const [showErrorUsernameString, setShowErrorUsernameString] = useState('');

    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorEmailString, setShowErrorEmailString] = useState('');

    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [showErrorPasswordString, setShowErrorPasswordString] = useState('');

    const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);
    const [showErrorConfirmPasswordString, setShowErrorConfirmPasswordString] = useState('');

    const register = async () => {
        let register = true;
        setShowErrorConfirmPassword(false);
        setShowErrorPassword(false);
        setShowErrorUsername(false);
        if (password.trim() !== confirmPassword.trim()) {
            register = false;
            setShowErrorConfirmPassword(true);
        }
        if (password.length < 8) {
            register = false;
            setShowErrorPassword(true);
        }
        if (username.length < 4) {
            register = false;
            setShowErrorUsername(true);
        }
        if (register) {
            setIsLoading(true);
            API.post('bas/user/register', {username: username, password: password, email: email})
                .then(res => {
                    console.log(res)
                    setIsLoading(false);
                    document.location.href = '/login';
                });
        }
    }

    return (
        <JAMRow style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <JAMPanel width={"90%"} height={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth="400px">
                    <JAMCol>
                        <JAMImage icon={logo} note='House image'/>
                    </JAMCol>
                    <JAMCol>
                        <JAMRow>
                            <JAMLabel style={{padding: "10px"}} caption='Welcome to NaszaApka' header/>
                        </JAMRow>
                        <JAMRow style={{paddingBottom: "20px"}}>
                            <JAMLine/>
                            <JAMLabel style={{padding: "20px"}} caption='REGISTER YOUR ACCOUNT' color='#E0E0E0'/>
                            <JAMLine/>
                        </JAMRow>
                        <JAMInput error={showErrorUsernameString} showError={showErrorUsername} caption='Login'
                                  width="300px" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} onInput={(e) => {
                            if (e.target.value.length < 4) {
                                setShowErrorUsername(true);
                                setShowErrorUsernameString("Username must be at least 4 characters long");
                            } else {
                                setShowErrorUsername(false);
                            }
                        }} onKeyPress={e => {
                            if (e.key === 'Enter') {
                                setUsername(e.target.value)
                                register()
                            }
                          }} />
                        <JAMInput caption='Email' width="300px" type='email' showError={showErrorEmail}
                                  error={showErrorEmailString} value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} onInput={(e) => {
                            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!re.test(e.target.value)) {
                                setShowErrorEmail(true);
                                setShowErrorEmailString("Entered string is not a valid email");
                            } else {
                                setShowErrorEmail(false);
                            }
                        }} onKeyPress={e => {
                            if (e.key === 'Enter') {
                                setEmail(e.target.value)
                                register()
                            }
                          }} />
                        <JAMInput caption='Password' width="300px" onInput={(e) => {
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
                                  error={showErrorPasswordString} onChange={(e) => {
                            setPassword(e.target.value)
                        }} onKeyPress={e => {
                            if (e.key === 'Enter') {
                                setPassword(e.target.value)
                                register()
                            }
                          }} type='password'/>
                        <JAMInput caption='Confirm Password' width="300px" value={confirmPassword}
                                  showError={showErrorConfirmPassword}
                                  error={showErrorConfirmPasswordString} onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }} onInput={(e) => {
                            if (e.target.value !== password) {
                                setShowErrorConfirmPassword(true);
                                setShowErrorConfirmPasswordString("Passwords are not identical");
                            } else {
                                setShowErrorConfirmPassword(false);
                            }
                        }} onKeyPress={e => {
                            if (e.key === 'Enter') {
                                setConfirmPassword(e.target.value)
                                register()
                            }
                          }} type='password'/>
                        <JAMRow float='left' width='100%'>
                        </JAMRow>
                        <JAMRow style={{width: "100%", paddingTop: "40px"}}>
                            <JAMButton value='Register' width={"100%"} onClick={() => {
                                console.log("Halko");
                                register();
                            }}/>
                        </JAMRow>
                        <JAMRow style={{paddingTop: "30px"}}>
                            <JAMLabel style={{padding: "10px"}} caption='Already have an account?'/>
                            <a href="/login">
                                Sign in!
                            </a>
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMPanel>
        </JAMRow>
    )
}

export default Register;