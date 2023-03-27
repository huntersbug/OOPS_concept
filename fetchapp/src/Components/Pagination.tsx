import { Box, Button, HStack } from "@chakra-ui/react";
import React, { Component } from "react";
interface SS {
  count: number;
  Currentpage: number;
  handelchangepage: (argu: string) => void;
  handeldecre: (argu: string) => void;
}
export default class Pagination extends Component<SS> {
  constructor(props: SS) {
    super(props);
  }
  handelclick = () => {
    this.props.handelchangepage("button");
  };
  handeldec = () => {
    this.props.handeldecre("button");
  };

  render() {
    const count = this.props.count;
    const Currentpage = this.props.Currentpage;
    return (
      <Box
        width={"100%"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        mt={"20px"}
        flexDirection={"column"}
        padding={"10px"}
      >
        <HStack>
          <Button padding={"10px"}>Current Page: {Currentpage}</Button>
          <Button padding={"10px"}>
            Total Page: {Math.floor((count * 20) / 6)}
          </Button>
        </HStack>
        <HStack mt={"20px"}>
          <Button
            colorScheme={"messenger"}
            padding={"10px"}
            isDisabled={Currentpage <= 1}
            onClick={this.handeldec}
          >
            Prev
          </Button>
          <Button
            colorScheme={"messenger"}
            padding={"10px"}
            isDisabled={Currentpage >= 10}
            onClick={this.handelclick}
          >
            Next
          </Button>
        </HStack>
      </Box>
    );
  }
}
