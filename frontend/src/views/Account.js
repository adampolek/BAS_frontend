import React, {useState} from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import JAMLine from '../components/JAMLine';
import JAMRow from '../components/JAMRow';
import JAMLabel from '../components/JAMLabel';
import API from "../api/API";
import JAMRadioButton from '../components/JAMRadioButton';
import Menubar from './Menubar';
import JAMLoader from '../components/JAMLoader';

let initialRead = true;

const Account = (props) => {


    const [user, setUser] = useState({});

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('none');
    const [birthDate, setBirthDate] = useState(new Date().toISOString().slice(0, 10));

    const [email, setEmail] = useState('');
    const [emailPassword, setEmailPassword] = useState('');

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [deletePassword, setDeletePassword] = useState('');

    const [isLoadingPersonalInformation, setIsLoadingPersonalInformation] = useState(false);
    const [isLoadingEmailAddress, setIsLoadingEmailAddress] = useState(false);
    const [isLoadingPassword, setIsLoadingPassword] = useState(false);
    const [isLoadingDeleteAccount, setIsLoadingDeleteAccount] = useState(false);

    const [showErrorHeight, setShowErrorHeight] = useState(false);
    const [showErrorHeightString, setShowErrorHeightString] = useState('');


    const updateAccountInfo = async () => {
        setIsLoadingPersonalInformation(true)
        API.put("bas/user/account", Object.assign({},
            user, {firstName: firstName}, {lastName: lastName},
            {height: height}, {gender: gender}, {birthDate: birthDate}),
            {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            setIsLoadingPersonalInformation(false);
        })
    };
    const changeEmail = async () => {
        setIsLoadingEmailAddress(true)
        API.put("bas/user/account", Object.assign({}, user, {
            email: email
        }), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            setIsLoadingEmailAddress(false);
        })
    }

    const updatePassword = async () => {
        setIsLoadingPassword(true);
        API.put("bas/user/account", Object.assign({}, user, {
            password: newPassword
        }), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            setIsLoadingPassword(false);
        })
    }

    const deletePasswordFunc = async () => {
        setIsLoadingDeleteAccount(true);
        API.delete("bas/user/account", {
            data: {id: user.id, password: deletePassword},
            headers: {Authorization: JSON.parse(localStorage.getItem('token'))}
        }).then(res => {
            setIsLoadingDeleteAccount(false);
            document.location.href = "/login";
        })
    }

    if (initialRead) {
        API.get("bas/user/account", {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                setFirstName(res.data.firstName === null ? '' : res.data.firstName);
                setLastName(res.data.lastName === null ? '' : res.data.lastName);
                setEmail(res.data.email === null ? '' : res.data.email);
                setHeight(res.data.height === null ? '0' : res.data.height);
                setGender(res.data.gender === null ? 'male' : res.data.gender);
                setBirthDate(res.data.birthDate === null ? new Date().toISOString().slice(0, 10) : new Date(res.data.birthDate).toISOString().slice(0, 10));
                setUser(res.data);
                initialRead = false;
            }).catch(error => {
            initialRead = false;
        });
    }

    return (
        <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'
                  style={{marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px'}}>
            <Menubar color='white'/>
            <JAMRow width='100%'>
                <JAMLabel center style={{padding: "10px", width: '100%'}} caption='Personal information' big bold/>
                <JAMLine width='80%'/>
                <JAMRow>
                    <JAMCol float='center'>
                        <JAMRow>
                            <JAMInput caption='First Name' width="350px" value={firstName}
                                      onChange={(e) => setFirstName(e.target.value)}/>
                            <JAMInput caption='Last Name' width="350px" value={lastName}
                                      onChange={(e) => setLastName(e.target.value)}/>
                        </JAMRow>
                        <JAMRow>
                            <JAMCol>
                            <JAMInput type='number' width='350px' caption='Height (cm)' value={height}
                            showError={showErrorHeight} 
                            error={showErrorHeightString} onChange={(e) => {
                                setHeight(e.target.value)
                            }} onInput={(e) => {
                                if (e.target.value < 100 || e.target.value > 240) {
                                    setShowErrorHeight(true);
                                    setShowErrorHeightString("Your height must be between 100 cm and 240 cm");
                                } else {
                                    setShowErrorHeight(false);
                                }
                            }} />
                            </JAMCol>
                            <JAMCol width='380px'>
                            </JAMCol>
                        </JAMRow>
                        <JAMRow>
                            <JAMCol>
                                <JAMRadioButton caption='Gender' width='370px' options={['none', 'male', 'female']}
                                                selected={gender}
                                                onChange={(e) => setGender(e)}/>
                            </JAMCol>
                            <JAMCol width='380px'>
                            </JAMCol>
                        </JAMRow>
                        <JAMRow>
                            <JAMCol>
                                <JAMInput caption='Birth day' type='date' width='350px'
                                          onChange={(e) => setBirthDate(e.target.value)} value={birthDate}/>
                            </JAMCol>
                            <JAMCol width='380px'>
                            </JAMCol>
                        </JAMRow>
                        <JAMRow>
                            <JAMCol>
                                <JAMButton disabled={showErrorHeight} value="Save" width='370px' onClick={() => {
                                    updateAccountInfo()
                                }}/>
                            </JAMCol>
                            <JAMCol width='380px'>
                            </JAMCol>
                        </JAMRow>
                        <JAMRow>
                            <JAMLoader show={isLoadingPersonalInformation}/>
                        </JAMRow>
                    </JAMCol>
                </JAMRow>
            </JAMRow>

            <JAMRow width='100%'>
                <JAMLabel center style={{padding: "10px", width: '100%'}} caption='E-mail address' big bold/>
                <JAMLine width='80%'/>
                <JAMRow>
                    <JAMCol float='left'>
                        <JAMRow>
                            <JAMInput caption='E-mail address' width="350px" value={email}
                                      onChange={(e) => setEmail(e.target.value)}/>
                            <JAMInput caption='Password' width="350px" type="password" value={emailPassword}
                                      onChange={(e) => setEmailPassword(e.target.value)}/>
                        </JAMRow>
                        <JAMRow>
                            <JAMCol>
                                <JAMButton value="Save" width='370px' onClick={() => changeEmail()}/>
                            </JAMCol>
                            <JAMCol width='380px'></JAMCol>
                        </JAMRow>
                        <JAMRow>
                            <JAMLoader show={isLoadingEmailAddress}/>
                        </JAMRow>
                    </JAMCol>
                </JAMRow>
            </JAMRow>

            <JAMRow width='100%'>
                <JAMLabel center style={{padding: "10px", width: '100%'}} caption='Password' big bold/>
                <JAMLine width='80%'/>
                <JAMRow>
                    <JAMCol float='left'>
                        <JAMRow>
                            <JAMCol>
                                <JAMInput caption='Current password' width="350px" type="password"
                                          value={currentPassword}
                                          onChange={(e) => setCurrentPassword(e.target.value)}/>
                            </JAMCol>
                            <JAMCol width='380px'/>
                        </JAMRow>
                        <JAMRow>
                            <JAMInput caption='New password' width="350px" type="password" value={newPassword}
                                      onChange={(e) => setNewPassword(e.target.value)}/>
                            <JAMInput caption='Confirm password' width="350px" type="password"
                                      value={confirmPassword}
                                      onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </JAMRow>
                        <JAMRow>
                            <JAMCol>
                                <JAMButton value="Save" width='370px' onClick={() => updatePassword()}/>
                            </JAMCol>
                            <JAMCol width='380px'/>
                        </JAMRow>
                        <JAMRow>
                            <JAMLoader show={isLoadingPassword}/>
                        </JAMRow>
                    </JAMCol>
                </JAMRow>
            </JAMRow>

            <JAMRow>
                <JAMLabel left style={{padding: "10px"}} caption='Delete your account' big bold/>
                <JAMLine width='80%'/>
                <JAMRow>
                    <JAMCol float='left'>
                        <JAMInput caption='Confirm password' width="350px" type="password" value={deletePassword}
                                  onChange={(e) => setDeletePassword(e.target.value)}/>
                        <JAMButton value="Delete account" width='370px' onClick={() => deletePasswordFunc()}/>
                    </JAMCol>
                    <JAMCol width='370px'>
                    </JAMCol>
                    <JAMRow>
                        <JAMLoader show={isLoadingDeleteAccount}/>
                    </JAMRow>
                </JAMRow>
            </JAMRow>
        </JAMPanel>
    )
}

export default Account;