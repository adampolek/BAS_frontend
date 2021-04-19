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

    const updateAccountInfo = async () => {
        console.log(gender);
        API.put("bas/user/account", Object.assign({},
            user, {firstName: firstName}, {lastName: lastName},
            {height: height}, {gender: gender}, {birthDate: birthDate}),
            {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            console.log(res);
        })
    };
    const changeEmail = async () => {
        API.put("bas/user/account", Object.assign({}, user, {
            email: email
        }), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            console.log(res);
        })
    }

    const updatePassword = async () => {
        API.put("bas/user/account", Object.assign({}, user, {
            password: newPassword
        }), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            console.log(res);
        })
    }

    const deletePasswordFunc = async () => {
        API.delete("bas/user/account", {
            data: {id: user.id, password: deletePassword},
            headers: {Authorization: JSON.parse(localStorage.getItem('token'))}
        }).then(res => {
            console.log(res)
            document.location.href = "/";
        })
    }

    if (initialRead) {
        API.get("bas/user/account", {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                console.log(res);
                initialRead = false;
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setHeight(res.data.height);
                setGender(res.data.gender === null ? 'male' : res.data.gender);
                setBirthDate(res.data.birthDate === null ? new Date().toISOString().slice(0, 10) : new Date(res.data.birthDate).toISOString().slice(0, 10));
                setUser(res.data);
            });
    }

    return (
        <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"} style={{position: "absolute"}}>
            <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                <Menubar/>

                <JAMRow width='100%'>
                    <JAMLabel center style={{padding: "10px", width: '100%'}} caption='Personal information' big bold/>
                    <JAMLine width='80%'/>
                    <JAMRow>
                        <JAMCol float='left'>
                            <JAMRow>
                                <JAMInput caption='First Name' width="350px" value={firstName}
                                          onChange={(e) => setFirstName(e.target.value)}/>
                                <JAMInput caption='Last Name' width="350px" value={lastName}
                                          onChange={(e) => setLastName(e.target.value)}/>
                            </JAMRow>
                            <JAMInput type='number' caption='Height' width="350px" value={height}
                                      onChange={(e) => setHeight(e.target.value)}/>
                            <JAMRadioButton caption='Gender' options={['none', 'male', 'female']} selected={gender}
                                            onChange={(e) => setGender(e)}/>
                            <JAMInput caption='Birth day' type='date' width='350px'
                                      onChange={(e) => setBirthDate(e.target.value)} value={birthDate}/>
                            <JAMButton value="Save" onClick={() => updateAccountInfo()}/>
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
                            <JAMButton value="Save" onClick={() => changeEmail()}/>
                        </JAMCol>
                    </JAMRow>
                </JAMRow>

                <JAMRow width='100%'>
                    <JAMLabel center style={{padding: "10px", width: '100%'}} caption='Password' big bold/>
                    <JAMLine width='80%'/>
                    <JAMRow>
                        <JAMCol float='left'>
                            <JAMInput caption='Current password' width="350px" type="password" value={currentPassword}
                                      onChange={(e) => setCurrentPassword(e.target.value)}/>
                            <JAMRow>
                                <JAMInput caption='New password' width="350px" type="password" value={newPassword}
                                          onChange={(e) => setNewPassword(e.target.value)}/>
                                <JAMInput caption='Confirm password' width="350px" type="password"
                                          value={confirmPassword}
                                          onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </JAMRow>
                            <JAMButton value="Save" onClick={() => updatePassword()}/>
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
                            <JAMButton value="Delete account" onClick={() => deletePasswordFunc()}/>
                        </JAMCol>
                        <JAMCol width='350px'>

                        </JAMCol>
                    </JAMRow>
                </JAMRow>
            </JAMPanel>
        </JAMPanel>
    )
}

export default Account;