import React, { useState } from 'react';
import JAMCombobox from '../components/JAMCombobox';
import JAMCol from '../components/JAMCol';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import JAMInput from '../components/JAMInput';
import JAMCheckbox from '../components/JAMCheckbox';
import JAMRow from '../components/JAMRow';
import JAMButton from '../components/JAMButton';
import JAMLoader from '../components/JAMLoader';

const AdminPanel = (props) => {
    
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <JAMPanel minHeight='700px' width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px' style={{ marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <Menubar color='white' />
            <JAMCol >
                <JAMRow>
                    <JAMCombobox  
                        caption="Learning Method"
                        // ŻY ŻY TODO: podpiąć
                        elements={["elem1", "elem2", "elem3"]}
                        value={selectedOption}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setSelectedOption(e.target.value);
                        }} />
                </JAMRow>
                <JAMRow>
                    {/* ŻY ŻY TODO: podpiąć */}
                    <JAMButton value="Save" />
                </JAMRow>
                <JAMLoader />
                <JAMRow>
                    <JAMButton value="Start learning" />
                </JAMRow>
                <JAMLoader />
            </JAMCol>
        </JAMPanel>
    )
}

export default AdminPanel;