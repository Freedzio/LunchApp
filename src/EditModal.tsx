import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import days from './database/weekDays';
import dayProps from './dayProps';

class EditModal extends React.Component<EditModalProps, EditModalState> {
    constructor(props: any) {
        super(props);

        this.state = {
            menu: this.props.menu,
            stashedMenu: this.props.menu
        }

        this.onSoupChange = this.onSoupChange.bind(this);
        this.onMainChange = this.onMainChange.bind(this);
        this.onVegeChange = this.onVegeChange.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.onFormSend = this.onFormSend.bind(this);
        this.test = this.test.bind(this)
    }

    test(event: any) {
        event.preventDefault()
        console.log(this.state.menu)
    }

    onSoupChange(event: any) {
        var newMenu = this.state.menu
        var newDay = this.state.menu[this.props.dayEdited]

        newDay = {
            ...newDay,
            soup: event.target.value
        }

        newMenu[this.props.dayEdited] = newDay

        this.setState({
            ...this.state,
            menu: newMenu
        })
    }

    onMainChange(event: any) {
        var newMenu = this.state.menu
        var newDay = this.state.menu[this.props.dayEdited]

        newDay = {
            ...newDay,
            main: event.target.value
        }

        newMenu[this.props.dayEdited] = newDay

        this.setState({
            ...this.state,
            menu: newMenu
        })
    }

    onVegeChange(event: any) {
        var newMenu = this.state.menu
        var newDay = this.state.menu[this.props.dayEdited]

        newDay = {
            ...newDay,
            vege: event.target.value
        }

        newMenu[this.props.dayEdited] = newDay

        this.setState({
            ...this.state,
            menu: newMenu
        })
    }

    onFormSend(event: any) {
        event.preventDefault()
    }

    async cancelEdit(event: any) {
        event.preventDefault();
        
        await this.setState({
            menu: this.state.stashedMenu
        })
        
        this.props.toggle(this.props.dayEdited)

        console.log(this.props.menu)
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.props.toggle(this.props.dayEdited)}>
                <ModalHeader toggle={() => this.props.toggle(this.props.dayEdited)}>
                    {days[this.props.dayEdited]}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='soup'>Zupa</Label>
                            <Input type='text' id='soup' required value={this.state.menu[this.props.dayEdited].soup} onChange={this.onSoupChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='main'>Danie główne</Label>
                            <Input type='text' id='main' required value={this.state.menu[this.props.dayEdited].main} onChange={this.onMainChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='vege'>Vege</Label>
                            <Input type='text' id='vege' required value={this.state.menu[this.props.dayEdited].vege} onChange={this.onVegeChange} />}
                        </FormGroup>
                        <Button
                            className='float-left'
                            onClick={this.cancelEdit}>
                            Anuluj
                        </Button>
                        <Button
                            className='float-right'
                            color='primary'
                            onClick={this.test}>
                            Zapisz
                        </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        )
    }
}

interface EditModalProps {
    dayEdited: number,
    isOpen: boolean,
    toggle: (index: number) => void,
    menu: dayProps[]
}

interface EditModalState {
    menu: dayProps[],
    stashedMenu: dayProps[]
}

export default EditModal