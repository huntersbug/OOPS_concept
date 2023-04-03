import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
export default class Navbar extends Component {
  render() {
    return (
      <Box
        width={"100%"}
        height={"80px"}
        boxSizing={"border-box"}
        boxShadow="dark-lg"
        rounded="md"
        bg="white"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box width={["50%", "60%", "40%"]} p={"3"} height={"80px"}>
          <Image src="download.png" width={"200px"} height={"50px"} />
        </Box>
        <Box
          width={["50%", "40%", "30%"]}
          p={"3"}
          height={"60px"}
          display={"flex"}
          justifyContent={"space-evenly"}
          mt={"10px"}
        >
          <Box>
            <Link to="/wishlist">
              <FaHeart fontSize={"30px"} color={"orange"} />
            </Link>
          </Box>
          <Box position={"relative"}>
            <FaCartPlus fontSize={"30px"} color={"teal"} />
            {/* <Text
              position={"absolute"}
              top={"-50%"}
              left={"20px"}
              color={"red"}
              as={"b"}
            >
              1
            </Text> */}
          </Box>
          <ColorModeSwitcher />
        </Box>
      </Box>
    );
  }
}
