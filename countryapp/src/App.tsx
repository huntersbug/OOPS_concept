
import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import Countrytabel from './Components/Countrytabel'
import Navbar from './Components/Navbar'
interface Appstate{
countryinfo:any[]
}
export default class App extends Component<{},Appstate> {
state={countryinfo:[]};
  handelget=(e:string)=>{

fetch(`https://restcountries.com/v3.1/name/${e}`).then((res)=>{
return res.json()
}).then((res)=>{
this.setState({countryinfo:res})
})
  }
  render() {

    return (
      <Box textAlign={"center"}>


        <Navbar handelget={this.handelget}/>
        <Countrytabel info={this.state.countryinfo}/>
      </Box>
    )
  }
}
