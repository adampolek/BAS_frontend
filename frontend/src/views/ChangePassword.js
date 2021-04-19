import React from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';

const ChangePassword = () => {
    return (
        <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"} style={{ position: "absolute" }}>
            <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                <JAMCol>
                    <JAMInput caption='Password' width="300px" type='password' />
                    <JAMInput caption='Confirm password' width="300px" type='password' />
                    <JAMButton value='Save' />
                </JAMCol>
                <JAMCol>

                </JAMCol>
            </JAMPanel>
        </JAMPanel>
    );
}

export default ChangePassword;