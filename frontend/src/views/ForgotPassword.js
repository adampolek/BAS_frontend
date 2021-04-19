import React from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';

const ForgotPassword = () => {
    return (
        <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"} style={{ position: "absolute" }}>
            <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                <JAMCol>
                    <JAMInput caption='Email' width="300px" />
                    <JAMButton value='Send' />
                </JAMCol>
                <JAMCol>

                </JAMCol>
            </JAMPanel>
        </JAMPanel>
    );
}

export default ForgotPassword;