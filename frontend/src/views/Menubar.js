import React, { useState } from 'react';
import JAMHamburger from '../components/JAMHamburger';
import JAMButton from '../components/JAMButton';
import JAMLine from '../components/JAMLine';
import JAMRow from "../components/JAMRow";
import API from "../api/API";

let initialRead = true;
const Menubar = ({ color = 'purple', dataPresent = false, ...props }) => {
    const [noData, setNoData] = useState(true);
    if (initialRead) {
        API.get("bas/entry/isEntry?entryDate=" + new Date().toISOString().slice(0, 10), { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } })
            .then(res => {
                setNoData(!res.data);
            })
        API.get('bas/user/role', { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } })
            .then(res => {
                initialRead = false;
                localStorage.setItem('role', JSON.stringify((res.data)));
            }).catch((error) => {
                initialRead = false;
                document.location.href = "/login";
            });
    }
    let adminRights = localStorage.getItem("role") === "\"ROLE_ADMIN\"";
    return (
        <JAMHamburger color={color}>
            <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='Home' width='350px'
                onClick={() => window.location = '/'} />
            <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='Account' width='350px'
                onClick={() => window.location = 'account'} />
            {noData ? (<JAMRow>
                <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='Daily diagnosis' width='350px'
                    onClick={() => window.location = 'diagnosis'} />
            </JAMRow>
            ) : (<JAMRow>
                <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='Generate report' width='350px'
                    onClick={() => {
                        API.get("bas/entry/send_stats", { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } })
                        window.location = '/'
                    }} />
            </JAMRow>
            )}
            <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='History' width='350px'
                onClick={() => window.location = 'history'} />

            {adminRights ? (
                <JAMRow>
                    <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                    <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='Admin Panel' width='350px'
                        onClick={() => window.location = 'admin'} />
                </JAMRow>
            ) : (
                <div />
            )}
            <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
            <JAMButton theme={color !== 'purple' ? 'white' : 'normal'} value='Logout' onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                document.location.href = "/login";
            }} width='350px' />
        </JAMHamburger>
    )
}

export default Menubar;