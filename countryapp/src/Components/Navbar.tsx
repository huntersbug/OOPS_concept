import { Box, Button, Input } from '@chakra-ui/react'
import React, { Component } from 'react'
interface Appstate {
  text: string
}
interface S {
  handelget: (argument: string) => void
}
export default class Navbar extends Component<S, Appstate>{
  constructor(props: S) {
    super(props)
    this.state = { text: "" }
  }

  handelchange = (e: any) => {
    this.setState({ text: e.target.value })
  }
  handelsubmit = () => {

    this.props.handelget(this.state.text)

  }
  render() {

    return (
      <Box border={"1px solid red"} width={"100%"} height={"70px"} borderRadius={"5px"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
        <Box width={"60%"} height={"70%"} mt={"10px"} display={"flex"} justifyContent={"space-between"} >
          <Input placeholder='enter the country' outline={"none"} width={"80%"} onChange={this.handelchange} value={this.state.text} />
          <Button mt={"2px"} onClick={this.handelsubmit} isDisabled={this.state.text === ""}>Search</Button>
        </Box>
      </Box>
    )
  }
}
