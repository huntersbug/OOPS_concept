import React, { Component } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";


interface Appsprops {
  handelget: (argu: any) => void;
}
export default class Home extends Component<Appsprops> {
  state = { text: "", isRandom: [], isspinner: false };
  constructor(props: Appsprops) {
    super(props);
  }
  handelchange = (e: any) => {
    this.setState({ text: e.target.value });
  };
  handelsubmit = () => {
    this.props.handelget(this.state.text);
  };
    handelrandom = () => {
    this.setState({ isspinner: true });
    fetch(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Qdk55jfPtMZ8n6Dek7SPPx2FXkY2O1rTql9qu8an"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          isRandom: res.near_earth_objects,
          isspinner: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handelselect = (e: any) => {
    this.props.handelget(e.target.value);
  };
  render() {
    const { isRandom } = this.state;
    return (
      <Box
        textAlign="center"
        fontSize="xl"
        width={"30%"}
        height={"200px"}
        margin={"auto"}
        mt={"100px"}
        boxShadow="dark-lg"
        borderRadius={"20px"}
      >
        <Text>Asteriod App </Text>

        <Input
          placeholder={"Enter Asteriod Id"}
          disabled={this.state.isspinner }
          width={"90%"}
          mt={"10px"}
          onChange={this.handelchange}
        />
       
        <Box width={"60%"} margin={"auto"} mt={"20px"}>
          <HStack spacing="24px">
            <Button
              colorScheme="linkedin"
              isDisabled={this.state.text.length === 0 || this.state.isspinner}
              value={this.state.text}
              onClick={this.handelsubmit}
            >
              Submit
            </Button>
            {this.state.isRandom.length === 0 ? (
              <Button
                variant="outline"
                colorScheme="linkedin"
                onClick={this.handelrandom}
                isDisabled={this.state.isspinner}
              >
                {this.state.isspinner ? "Loading" : "Random Id"}
              </Button>
            ) : (
              <Select
                onChange={this.handelselect}
                placeholder="Select Random Id"
              >
                {isRandom?.map((e: any) => (
                  <>
                    <option value={e.id} key={e.id}>
                      {e.id}
                    </option>
                  </>
                ))}
              </Select>
            )}
          </HStack>
        </Box>
      </Box>
    );
  }
}

