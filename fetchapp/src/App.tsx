import { Box, Input, Spinner, Text } from "@chakra-ui/react";
// import axios from "axios";
import React, { Component } from "react";
import Pagination from "./Components/Pagination";
import UserPost from "./Components/UserPost";
interface S {
  count: number;
  data: any;
  Currentpage: number;
  text: string
}
export default class App extends Component<{}, S> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0, data: [], Currentpage: 1, text: "" };
  
  }
  handelchangepage = (des: string) => {
    if (des === "button") {
      this.setState({ Currentpage: this.state.Currentpage + 1 });
    }
  };
  componentDidMount(): void {
    let id = setInterval(() => {
      if (this.state.count >= 2) {
        clearInterval(id);
      }
      this.setState({ count: this.state.count + 1 });
      this.getdata();
    }, 200);
    // let id2 = setInterval(() => {
    //   if (this.state.Currentpage >= 9) {
    //     clearInterval(id2);
    //   }

    //   this.handelchangepage("button");
    // }, 10000);
  }
  getdata = async () => {
    let count = this.state.count;
    try {
      let getdata = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`
      );
      let res = await getdata.json()
      let resposnsedata = res.hits

      let prevdata = this.state.data;
      resposnsedata?.map((e: any) => {
        prevdata.push(e);
      });

      this.setState({ data: prevdata });
    } catch (error) {
      console.log(error);
    }
  };

  handeldecre = (des: string) => {
    if (des === "button") {
      this.setState({ Currentpage: this.state.Currentpage - 1 });
    }
  };
  render() {
    return (
      <Box
        width={"90%"}
        margin={"auto"}
        textAlign={"center"}
        borderRadius={"10px"}
        height={"100vh"}
      >
        <Input placeholder="Search Title" width={"50%"} mt={"20px"} onChange={(e) => this.setState({ text: e.target.value })} />
        {this.state.data.length === 60 ?
          <UserPost
            Currentpage={this.state.Currentpage}
            data={this.state.data}
            handelchangepage={this.handelchangepage}
            handeldecre={this.handeldecre}
            text={this.state.text}
          />
          : <Box mt={"50px"}>
            <Spinner size="xl" />
            <br />
            <Text as={"b"}>Please Wait Data is Loading</Text>
          </Box>}
        <Pagination
          count={this.state.count}
          Currentpage={this.state.Currentpage}
          handelchangepage={this.handelchangepage}
          handeldecre={this.handeldecre}
        />
      </Box>
    );
  }
}
