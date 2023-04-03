import { Box, HStack, Select, Text } from "@chakra-ui/react";
import React, { Component } from "react";
interface S{
    handeldept:(argu:any)=>void
    handelfilterslaray:(argu:any)=>void
}
export default class Filterdata extends Component<S> {
    constructor(props:S){
        super(props)
    }
    handelchange=(e:any)=>{
        console.log(e.target.value)
this.props.handelfilterslaray(e.target.value)

    }
    handel=(e:any)=>{
      
        this.props.handeldept(e.target.value)
    }
    render() {
        return (
            <Box padding={"20px"} width={"60%"} margin={"auto"}>
                <Text as={"b"}>Filter</Text>
                <HStack>
                    <Select onChange={this.handelchange}>
                        <option value="hte">High to Low</option>
                        <option value="lte">Low to High</option>
                    </Select>
                    <Select onChange={this.handel} >
                        <option value="Show All">Show All</option>
                        <option value="Sales">Sales</option>
                        <option value="Account">Account</option>
                        <option value="It">It</option>
                        <option value="Engineering">Engineering</option>
                    </Select>
                </HStack>
            </Box>
        );
    }
}
