import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { useEffect, useState } from 'react';
import CreateEmployeeModal from './CreateEmployeeModal';
import axios from 'axios';

const Employee = () => {
    ModuleRegistry.registerModules([AllCommunityModule]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        const response = axios.get("http://localhost:5173/ciyw/v1/employees");
        response.then((response) => {
            setEmployeeList(response.data);
        }).then((error) => {
            console.log(error);
        });
        console.log("response", employeeList);
    }, [])

    const columnDefs = [
        { field: 'id' },
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'emailId' }
    ];


    return (
        <>
            <button style={{  margin: '20px'}} onClick={() => setIsOpen(true)}>Create Employee</button>
            <div style={{ height: 500, width: 850, margin: '20px'}} >
                <AgGridReact
                    rowData={employeeList}
                    columnDefs={columnDefs}
                />
            </div>
            {modalIsOpen &&
                <CreateEmployeeModal
                    closeModal={() => setIsOpen(false)}
                    modalIsOpen
                />
            }
        </>
    )
}

export default Employee;