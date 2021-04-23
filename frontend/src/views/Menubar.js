import React, {useState} from 'react';
import JAMHamburger from '../components/JAMHamburger';
import JAMButton from '../components/JAMButton';
import JAMLine from '../components/JAMLine';
import JAMRow from "../components/JAMRow";
import API from "../api/API";


const Menubar = ({color = 'purple', dataPresent = false, ...props}) => {

    const [noData, setNoData] = useState(true);

    API.get('bas/user/role', {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
        .then(res => {
            localStorage.setItem('role', JSON.stringify((res.data)));
        }).catch((error) => {
        document.location.href = "/login";
    });

    API.get("bas/entry/day?entryDate=" + new Date().toISOString().slice(0, 10), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
        .then(res => {
            setNoData(false);
        })

    let adminRights = localStorage.getItem("role") === "\"ROLE_ADMIN\"";
    return (
        <JAMHamburger color={color}>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Home' width='300px'
                       onClick={() => window.location = '/'}/>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Account' width='300px'
                       onClick={() => window.location = 'account'}/>
            {noData ? (<JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Daily diagnosis' width='300px'
                                  onClick={() => window.location = 'diagnosis'}/>)
                : (<div/>)}

            {adminRights ? (
                <JAMRow>
                    <JAMLine style={{marginTop: '20px', marginBottom: '20px'}}/>
                    <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Admin Panel' width='300px'/>
                </JAMRow>
            ) : (
                <div/>
            )}
            <JAMLine style={{marginTop: '20px', marginBottom: '20px'}}/>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Logout' onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                document.location.href = "/login";
            }} width='300px'/>
        </JAMHamburger>
    )
}

export default Menubar;