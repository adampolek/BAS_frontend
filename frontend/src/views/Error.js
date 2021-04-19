import React from 'react';
import JAMCol from '../components/JAMCol';
import JAMImage from '../components/JAMImage';
import JAMLabel from '../components/JAMLabel';
import JAMPanel from '../components/JAMPanel';
import logo from '../resources/error.png'
import Menubar from './Menubar';

const Error = (props) => {
    return (
        <JAMCol style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <Menubar color='white'/>
            <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <JAMPanel width={"90%"} height={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                    <JAMCol >
                        <JAMLabel header caption='Ooops something went wrong :(' style={{marginBottom: '30px'}}/>
                        <JAMImage icon={logo} note='Error 404' style={{maxWidth: '400px'}}/>
                    </JAMCol>
                </JAMPanel>
            </JAMPanel>
        </JAMCol>
    )
}

export default Error;