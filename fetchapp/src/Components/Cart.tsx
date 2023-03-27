import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import CreateModal from "./CreateModal";
interface S {
  isModalopen: boolean;
  jsondata: any;
}
export default class Cart extends Component<any, S> {
  constructor(props: any) {
    super(props);
    this.state = { isModalopen: false, jsondata: undefined };
  }

  handelopen = (e: any) => {
    this.setState({ isModalopen: true, jsondata: e });
  };
  handelclose = () => {
    this.setState({ isModalopen: false });
  };
  render() {
    const item = this.props.item;

    return (
      <Box
        height={"160px"}
        border={"1px solid teal"}
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
        overflow={"hidden"}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Url</Th>
                <Th>Author</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr cursor={"pointer"} onClick={() => this.handelopen(item)}>
                <Td>{item.title}</Td>
                <Td>{item.url}</Td>
                <Td>{item.author}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <CreateModal
          isOpen={this.state.isModalopen}
          isClose={this.handelclose}
          jsondata={this.state.jsondata}
        />
      </Box>
    );
  }
}
