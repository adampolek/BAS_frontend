import React from 'react';
import JAMCol from '../components/JAMCol';
import JAMImage from '../components/JAMImage';
import JAMLabel from '../components/JAMLabel';
import JAMPanel from '../components/JAMPanel';
import logo from '../resources/error.png'
import Menubar from './Menubar';

const Error = (props) => {
    return (
        <JAMPanel minHeight='700px' width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px' style={{ marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <Menubar color='white' />
            <JAMCol >
                <JAMLabel header caption='Ooops something went wrong :(' style={{ marginBottom: '30px' }} />
                <JAMImage icon={logo} note='Error 404' style={{ maxWidth: '350px' }} />
            </JAMCol>
        </JAMPanel>
    )
}

export default Error;