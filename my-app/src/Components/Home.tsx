import React, { Component, createRef, RefObject, ChangeEventHandler } from "react";
import "../App.css"
import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
interface Proops {
  todos: any[],
  gettodos: () => void
}
interface AppState {
  isModalOpen: true | false;
  edittext: string;
  editdes: string;
  id: any;
  isPopover: true | false;
  deleteid: null | number
  isModaldeletOpen: boolean
}
export default class Home extends Component<Proops, AppState> {
  private containerRef: RefObject<HTMLDivElement>;
  constructor(props: Proops) {
    super(props)
    this.state = { isModalOpen: false, edittext: "", editdes: "", id: null, isPopover: false, deleteid: null, isModaldeletOpen: false }
    this.containerRef = createRef<HTMLDivElement>();
  }

  componentDidMount(): void {
    this.props.gettodos()
  }
  componentDidUpdate(prevProps: Proops, prevState: AppState) {
  
    if (prevProps.todos.length !== this.props.todos.length) {
this.scrolldown()
    }
  }
  scrolldown = () => {
    const container = this.containerRef.current;
   
    if (container) {
      console.log(container.scrollHeight)
      container.scrollTop = container.scrollHeight;
    }
  }
  handleOpenModal = (text: string, des: string, id: number) => {

    this.setState({ isModalOpen: true, editdes: des, edittext: text, id: id });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };





  checkedchangebox = (id: number) => {
    const todostatus = this.props.todos?.filter((e: any) => {
      if (e.id === id) {
        return e
      }
    })
    const payload = { status: !todostatus[0].status }
    fetch(`https://api-checking.onrender.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(payload)
    }).then(() => {
      this.props.gettodos()
    }).catch((err) => {
      console.log(err)
    })


  }
  handeldelte = (id: number) => {
    this.setState({ deleteid: id, isModaldeletOpen: true })

  }
  handeledit: ChangeEventHandler<HTMLInputElement> = (e) => {

    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }
  handelpatch = (id: number) => {


    const payload = { text: this.state.edittext, description: this.state.editdes }

    fetch(`https://api-checking.onrender.com/todos/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(payload)
    }).then(() => {
      this.props.gettodos()
    }).catch((err) => {
      console.log(err)
    })
    this.setState({ isModalOpen: false });
  }
  handledeletCloseModal = () => {
    this.setState({ isModaldeletOpen: false });
  }
  handeldeletconfimed = () => {


    fetch(`https://api-checking.onrender.com/todos/${this.state.deleteid}`, {
      method: 'DELETE',

    }).then(() => {
      this.props.gettodos()
    }).catch((err) => {
      console.log(err)
    })
    this.setState({ isModaldeletOpen: false, deleteid: null });
  }
  render() {
    const todos = this.props.todos


    return (
      <div className='conatiner' ref={this.containerRef}>




        <Text as={"b"} >Todo Item</Text>
        <Box mt={"10px"} width={"80%"} margin={"auto"} >
          {todos?.map((item: any) => (

            <Box display={"flex"} justifyContent={"space-evenly"} width={"100%"} border={"1px solid teal"} key={item.id} mt={"10px"} >
              <Box >
                <Text as={item.status ? "s" : "b"} >Title: {item.text}</Text>
                <br />
                <Text as={item.status ? "s" : "b"}>Description: {item.description}</Text>

              </Box>
              <Box display={"flex"} width={"40%"} margin={"auto"} justifyContent={'space-between'}>

                <Button onClick={() => this.handeldelte(item.id)} data-testid="deletebutton">Delete</Button>



                <Modal isOpen={this.state.isModaldeletOpen} onClose={this.handledeletCloseModal}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Edit Todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>Are You Want to Delete</Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={this.handledeletCloseModal}>
                        Cancel
                      </Button>
                      <Button variant='ghost' onClick={() => this.handeldeletconfimed()}>Yes</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
















                <Button onClick={() => this.handleOpenModal(item.text, item.description, item.id)} isDisabled={item.status}>Edit</Button>


                {/* modal */}
                <Modal isOpen={this.state.isModalOpen} onClose={this.handleCloseModal}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Edit Todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Input value={this.state.edittext} placeholder="title" onChange={this.handeledit} name="edittext" />
                      <Input value={this.state.editdes} placeholder="description" onChange={this.handeledit} name="editdes" />
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={this.handleCloseModal}>
                        Cancel
                      </Button>
                      <Button variant='ghost' disabled={this.state.editdes.length === 0 || this.state.edittext.length === 0} onClick={() => this.handelpatch(item.id)}>Edit</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>




                {/* modal */}




                <Checkbox defaultChecked={item.status} onChange={() => this.checkedchangebox(item.id)} size='lg' colorScheme={"telegram"} />
              </Box>
            </Box>

          ))}


        </Box>



      </div>
    )
  }
}

