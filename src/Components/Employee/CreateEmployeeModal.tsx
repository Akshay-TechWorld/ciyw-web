import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployeeAsync } from '../../reducers/EmployeeReducer';
import Modal from 'react-modal';

const CreateEmployeeModal = (closeModal: () => void, modalIsOpen: any) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const dispatch = useDispatch<any>();

    const onCreateClick = () => {
        const request = {
            firstName,
            lastName,
            emailId
        }
        dispatch(createEmployeeAsync(request));
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>Add New Employee</div>
                <form>
                    <div><span>First Name: </span> <input onChange={(e) => setFirstName(e.target.value)}/> </div>
                    <div><span>Last Name: </span> <input onChange={(e) => setLastName(e.target.value)}/> </div>
                    <div><span>Email Id: </span> <input onChange={(e) => setEmailId(e.target.value)}/> </div>
                    <button onClick={onCreateClick}>Create</button>
                    <button onClick={closeModal}>close</button>

                </form>
            </Modal>
        </div>
    )
}

export default CreateEmployeeModal;