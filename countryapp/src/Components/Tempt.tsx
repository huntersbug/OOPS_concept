import React, { Component } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text,
} from '@chakra-ui/react'


export default class Tempt extends Component<any>{
    constructor(props: any) {
        super(props)

    }




    render() {
        const { isClose, isOpen, image, condition, temp ,precip
        } = this.props



        return (

            <>


                <Modal isOpen={isOpen} onClose={isClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Temperature</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image src={image} />
                            <Text>Temperature:{temp} </Text>
                            <Text>Wheather Description:{condition}</Text>
                            <Text>Precip:{precip
}</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={() => isClose()}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>

        )
    }

}
