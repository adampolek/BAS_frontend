import React, {useState} from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import JAMRow from '../components/JAMRow';
import logo from '../resources/login_background.png'
import JAMCheckbox from '../components/JAMCheckbox'
import API from "../api/API";
import JAMImage from '../components/JAMImage';
import JAMLine from '../components/JAMLine';
import JAMLabel from '../components/JAMLabel';
import JAMLink from '../components/JAMLink';
import JAMLoader from '../components/JAMLoader';

const Login = (props) => {
    const [rememberMe, setRememberMe] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(true);

    const login = async () => {
        setIsLoading(true);
        setShowError(false);

        API.post('bas/user/login', {
            username: username,
            password: password,
            rememberMe: rememberMe
        }).then(res => {
            const token = res.data;
            localStorage.setItem('token', JSON.stringify('Bearer ' + token.jwttoken));
            API.get('bas/user/role', {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
                .then(res => {
                    localStorage.setItem('role', JSON.stringify((res.data)));
                    document.location.href = "/";
                    setIsLoading(false);
                }).catch(error => {
                setIsLoading(false);
                console.log(error);
            });
        }).catch(error => {
            setIsLoading(false);
            //TODO I jeszcze tutaj dialoga do console loga
            console.log("Incorrect login and password");
        });
    };
    let disabled = username.length === 0 || password.length === 0;
    return (
        <JAMRow style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <JAMPanel width={"90%"} height={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                    <JAMCol>
                        <JAMRow>
                            <JAMLabel style={{padding: "10px"}} caption='Welcome Back' header/>
                        </JAMRow>
                        <JAMRow>
                            <JAMLine/>
                            <JAMLabel style={{padding: "20px"}} caption='LOGIN WITH USERNAME' color='#E0E0E0'/>
                            <JAMLine/>
                        </JAMRow>
                        <JAMInput caption='Login' width="300px" value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  onKeyPress={e => {
                                      if (e.key === 'Enter' && !disabled) {
                                          setUsername(e.target.value)
                                          login()
                                      }
                                  }}/>
                        <JAMInput caption='Password' width="300px" type='password' value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  onKeyPress={e => {
                                      if (e.key === 'Enter' && !disabled) {
                                          setPassword(e.target.value)
                                          login()
                                      }
                                  }}/>
                        <JAMRow float='left' style={{width: '100%'}}>
                            <JAMCheckbox caption="Keep me logged in" width='100%' checked={rememberMe}
                                         onClick={() => setRememberMe(!rememberMe)}/>
                        </JAMRow>
                        <JAMRow style={{width: "100%", paddingTop: "20px"}}>
                            <JAMButton value='Log in' width={"100%"}
                                       disabled={disabled}
                                       onClick={() => login()}/>
                        </JAMRow>
                        <JAMRow>
                            <JAMLink href='/login/forgot' caption='Forgot password?'/>
                        </JAMRow>
                        <JAMRow>
                            <JAMLoader show={isLoading}/>
                        </JAMRow>
                        <JAMRow style={{paddingTop: "40px"}}>
                            <JAMLabel style={{padding: "10px"}} caption="Don't have an account yet?"/>
                            <JAMLink href='/register' caption='Sign up!'/>
                        </JAMRow>
                    </JAMCol>
                    <JAMCol>
                        <JAMImage icon={logo} note='Login icon'/>
                    </JAMCol>
                </JAMPanel>
            </JAMPanel>
        </JAMRow>
    )
}

export default Login;