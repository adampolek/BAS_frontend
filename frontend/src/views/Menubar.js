import React from 'react';
import JAMHamburger from '../components/JAMHamburger';
import JAMButton from '../components/JAMButton';
import JAMLine from '../components/JAMLine';

const Menubar = ({color = 'purple' , ...props}) => {
    return (
        <JAMHamburger color={color}>
            <JAMButton theme={color!='purple' ? 'white' : 'normal'} value='Home' width='300px' onClick={()=>window.location='/'}/>
            <JAMButton theme={color!='purple' ? 'white' : 'normal'} value='Account' width='300px' onClick={()=>window.location='account'}/>
            <JAMButton theme={color!='purple' ? 'white' : 'normal'} value='Daily diagnosis' width='300px'/>
            <JAMLine style={{marginTop: '20px', marginBottom: '20px'}}/>
            {/* ŻYŻO, tu trzeba obsłużyć i wyświetlić panel jak admin :) */}
            <JAMButton theme={color!='purple' ? 'white' : 'normal'} value='Admin Panel' width='300px'/>
            <JAMLine style={{marginTop: '20px', marginBottom: '20px'}}/>
            <JAMButton theme={color!='purple' ? 'white' : 'normal'} value='Logout' width='300px'/>
        </JAMHamburger>
    )
}

export default Menubar;