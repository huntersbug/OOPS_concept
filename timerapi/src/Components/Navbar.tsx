import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import React, { Component } from "react";
interface S {
  name: string;
  address: string;
  salary: number;
  age: number;
  martial: string;
  department: string;
}
interface SS
{
    
    updatestate:(argu:any)=>void

}

export default class Navbar extends Component<SS, S> {
  constructor(props: SS) {
    super(props);
    this.state = {
      martial: "Single",
      department: "Sales",
      name: "",
      age: NaN,
      salary: NaN,
      address: "",
    };
  }
  handelchange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handelsubmit = () => {


  this.props.updatestate(this.state)
this.setState({name:"",department:"",address:"",age:NaN,salary:NaN})
  };
  render() {
    return (
      <Box border={"1px solid teal"} width={"90%"} margin={"auto"}>
        <Flex align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"100%"} py={12} px={6}>
            <Heading fontSize={"4xl"}>Employe Data</Heading>

            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <HStack spacing={1}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="name" onChange={this.handelchange}      value={this.state.name}/>
                </FormControl>
                <FormControl id="age">
                  <FormLabel>age</FormLabel>
                  <Input
                    type="number"
                    name="age"
                    onChange={this.handelchange}
                    value={this.state.age}
                  />
                </FormControl>
                <FormControl id="salary">
                  <FormLabel>Salary</FormLabel>
                  <Input
                    type="number"
                    name="salary"
                    onChange={this.handelchange}
                    value={this.state.salary}
                  />
                </FormControl>
                <FormControl id="address">
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    onChange={this.handelchange}
                    value={this.state.address}
                  />
                </FormControl>
                <FormControl id="status">
                  <FormLabel>Martial</FormLabel>
                  <Select onChange={this.handelchange} name="martial">
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </Select>
                </FormControl>
                <FormControl id="department">
                  <FormLabel>Department</FormLabel>
                  <Select onChange={this.handelchange} name="department">
                    <option value="Sales">Sales</option>
                    <option value="Account">Account</option>
                    <option value="It">It</option>
                    <option value="Engineering">Engineering</option>
                  </Select>
                </FormControl>
              </HStack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                mt={"10px"}
                onClick={this.handelsubmit}
              isDisabled={this.state.name===""||this.state.address===""||this.state.age===null}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Box>
    );
  }
}
