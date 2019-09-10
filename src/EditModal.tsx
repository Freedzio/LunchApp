import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import days from './database/weekDays';

class EditModal extends React.Component<EditModalProps, EditModalState> {
    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>
                    {days[this.props.dayEdited]}
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        )
    }
}

interface EditModalProps {
    dayEdited: number,
    isOpen: boolean
}

interface EditModalState {

}

export default EditModal