import { Box, Text } from "@chakra-ui/react";


import React, { Component } from "react"
import Home from "./Components/Home";
import Todo from "./Components/Todo";
interface AppState {
  isModalOpen: boolean;
  text: string;
  description: string;
  todos:unknown[]
}
interface Todoobject {
  text: string;
  description: string;
  status: boolean;
  
}
class App extends Component<{}, AppState> {
  state = {
    isModalOpen: false,
    text: "",
    description: "",
    todos:[]

  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
addingtodo = (payload: Todoobject) => {
  fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((r) => {

    }).then(()=>{
      this.gettodos()
    }).catch((err) => {
      console.log(err)
    })
  }
  gettodos = () => {
   fetch("http://localhost:8080/todos").then((r: any) => {
      this.setState({ todos: r.data })
    }).catch((err) => console.log(err))
  }
  render() {
    const { isModalOpen } = this.state;

    return (
      <div>

        <Box width={"100%"} backgroundColor={"teal.400"} height={"70px"} textAlign={"center"}>
          <Text >Todo App</Text>

          <button onClick={this.handleOpenModal} >Create Todo</button>

          <Todo
            gettodo={this.addingtodo}
            isOpen={isModalOpen}
            onClose={this.handleCloseModal}

          />


        </Box>
        <Box width={"100%"} height={"1000px"}  mt={"50px"} textAlign={"center"}>


          <Home todos={this.state.todos} gettodos={this.gettodos}/>
        </Box>
      </div>
    );
  }
}

export default App;