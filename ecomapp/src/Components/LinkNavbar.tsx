import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../LinkNavbar.css"
export default class LinkNavbar extends Component {
  render() {
    return (
      <Box

        maxW={"100%"}
        display={"flex"}
        overflowX={"auto"}
        boxSizing={"border-box"}
        boxShadow="lg"
        rounded="md"
        justifyContent={["normal", "space-evenly"]}
      >
        
        <Box p={"5"} cursor={"pointer"} className="linkbox">
          <Link to="/" className="mylink" >All</Link>
        </Box>
        <Box p={"5"} cursor={"pointer"}>
          <Link to="/womens" className="mylink">Womens</Link>
        </Box>
        <Box p={"5"} cursor={"pointer"}>
          <Link to="/electronic" className="mylink">Electronic</Link>
        </Box>
        <Box p={"5"} cursor={"pointer"}>
          <Link to="/mens" className="mylink">Mens</Link>
        </Box>
        <Box p={"5"} cursor={"pointer"}>
          <Link to="/jewellery" className="mylink">Jewellery</Link>
        </Box>
      </Box>
    );
  }
}
