import React, { useState } from 'react';
import JAMCombobox from '../components/JAMCombobox';
import JAMCol from '../components/JAMCol';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import JAMRow from '../components/JAMRow';
import JAMButton from '../components/JAMButton';
import JAMLoader from '../components/JAMLoader';
import DataTable from 'react-data-table-component';

const AdminPanel = (props) => {
    
    const [selectedOption, setSelectedOption] = useState("");
    // TODO: podpiac date
    const [data, setData] = useState([]);
    const cols = (["Gender","Glucose","BloodPressure","Insulin","BMI","Age","Outcome"]);
    const columns = cols.map(c => ({
        name: c,
        selector: c,
      }));


    return (
        <JAMPanel minHeight='700px' width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px' style={{ marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <Menubar color='white' />
            <JAMCol >
                <JAMRow>
                    <JAMCombobox  
                        caption="Learning Method"
                        // ŻY ŻY TODO: podpiąć metody uczenia
                        elements={["elem1", "elem2", "elem3"]}
                        value={selectedOption}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setSelectedOption(e.target.value);
                        }} />
                </JAMRow>
                <JAMRow>
                    {/* ŻY ŻY TODO: podpiąć start uczenia*/}
                    <JAMButton value="Start learning" />
                </JAMRow>
                <JAMLoader />
                <DataTable
                    pagination
                    highlightOnHover
                    columns={columns}
                    data={data}
                />
            </JAMCol>
        </JAMPanel>
    )
}

export default AdminPanel;