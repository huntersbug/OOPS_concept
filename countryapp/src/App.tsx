
import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import { getcountry } from './Components/api'
import Countrytabel from './Components/Countrytabel'
import Navbar from './Components/Navbar'
interface Appstate {
  countryinfo: any[]
}
export default class App extends Component<{}, Appstate> {
  state = { countryinfo: [] };
  handelget = (e: string) => {
    getcountry(e).then((res) => {
      console.log(res)
      this.setState({ countryinfo: res })
    }).catch((err) => {

    })

  }
  render() {

    return (
      <Box textAlign={"center"}>


        <Navbar handelget={this.handelget} />
        <Countrytabel info={this.state.countryinfo} />
      </Box>
    )
  }
}
