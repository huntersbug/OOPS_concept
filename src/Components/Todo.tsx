import React, { Component, ChangeEventHandler } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Text, Box } from '@chakra-ui/react';

interface TodoArgument{
    text: string; 
    description: string ;
    status: boolean 
}
interface MyModalProps {
    gettodo: (payload:TodoArgument) => void;

    isOpen: boolean;
    onClose: () => void;
}
interface AppState {

    text: string
    description: string
    popover: true | false
}

export default class Todo extends Component<MyModalProps, AppState>{
    constructor(props: MyModalProps) {
        super(props)
        this.state = { text: "", description: "", popover: false }
    }

    handelchange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }
    handelsubmit = () => {

        this.setState({ popover: !this.state.popover })



    }
    cancel = () => {
        this.setState({ text: "", description: "", popover: false })
    }
    addtodo = () => {

        const payload = { text: this.state.text, description: this.state.description, status: false }
        this.props.gettodo(payload)
        
        this.setState({ text: "", description: "", popover: false })

    }
    
    render() {

        const { isOpen, onClose } = this.props;
        let { popover, text, description } = this.state


        return (

            <>


                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create Todo App</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <Input placeholder='enter title' onChange={this.handelchange} name="text"></Input>
                            <Input placeholder='enter description' onChange={this.handelchange} name="description"></Input>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="ghost" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" ml={3} onClick={() => {

                                this.handelsubmit()
                                onClose()
                            }}
                                isDisabled={text === "" || description === ""}

                            >
                                Add
                            </Button>

                        </ModalFooter>
                    </ModalContent>

                </Modal>
                {popover ? <Box textAlign={"center"} border={"1px solid red"} height={"200px"} width={"200px"
                } margin={"auto"} mt={"200px"}>
                    <Text color={"cyan.400"}>Are want the Add todo if Yes then confirmed </Text>
                    <Button colorScheme={"linkedin"} margin={"20px"} onClick={this.addtodo}>YES</Button>
                    <Button color={"red"} margin={"20px"} onClick={this.cancel}>NO</Button>



                </Box> : ""}
            </>
        );
    }
}
