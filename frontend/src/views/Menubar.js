import React from 'react';
import JAMHamburger from '../components/JAMHamburger';
import JAMButton from '../components/JAMButton';
import JAMLine from '../components/JAMLine';
import JAMRow from "../components/JAMRow";


const Menubar = ({color = 'purple', ...props}) => {

    let adminRights = localStorage.getItem("role") === "\"ROLE_ADMIN\"";
    console.log(localStorage.getItem("role"));
    return (
        <JAMHamburger color={color}>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Home' width='300px'
                       onClick={() => window.location = '/'}/>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Account' width='300px'
                       onClick={() => window.location = 'account'}/>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Daily diagnosis' width='300px'
                       onClick={() => window.location = 'diagnosis'}/>
            {adminRights ? (
                <JAMRow>
                    <JAMLine style={{marginTop: '20px', marginBottom: '20px'}}/>
                    <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Admin Panel' width='300px'/>
                </JAMRow>
            ) : (
                <div/>
            )}
            <JAMLine style={{marginTop: '20px', marginBottom: '20px'}}/>
            <JAMButton theme={color != 'purple' ? 'white' : 'normal'} value='Logout' width='300px'/>
        </JAMHamburger>
    )
}

export default Menubar;