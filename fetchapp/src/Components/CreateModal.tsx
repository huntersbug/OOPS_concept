import React, { Component } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
export default class CreateModal extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { isClose, isOpen, jsondata } = this.props;
    let data = JSON.stringify(jsondata);

    return (
      <div>
        <Modal isOpen={isOpen} onClose={isClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>JSON Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{data}</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => isClose()}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
}
