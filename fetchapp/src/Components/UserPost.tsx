import { Box, Grid, HStack, Spinner, Text } from "@chakra-ui/react";
import React, { Component } from "react";

import Cart from "./Cart";
interface SS {
  data: any;
  Currentpage: number;
  handelchangepage: (argu: string) => void;
  handeldecre: (argu: string) => void;
  text?: string;
}
interface S {
  postdata: any;
  currentindex: number;
  previousindex: [];
}
export default class UserPost extends Component<SS, S> {
  constructor(props: SS) {
    super(props);
    this.state = { postdata: undefined, currentindex: 0, previousindex: [] };
  }

  handlefilter = (e: any) => {
    const data = this.props.data;
    let val = data[e];

    let textval = this.props.text;
    textval = textval?.toLowerCase();

    if (this.props.text?.length == 0) {
      return e;
    } else if (val.author.toLowerCase().includes(textval)) {
      return e;
    } else if (val.title.toLowerCase().includes(textval)) {
      return e;
    } else if (val.created_at.includes(textval)) {
      return e;
    }
  };
  componentDidMount(): void {
    const intervalId = setInterval(() => {
      let val = (this.props.Currentpage - 1) * 6;

      let indexdata: any = this.state.previousindex;
      indexdata.push(this.state.currentindex);

      this.setState({ previousindex: indexdata });
      this.setState({ currentindex: this.state.currentindex + 1 });
      if (this.state.currentindex >= 6 * this.props.Currentpage) {
        clearInterval(intervalId);
      }
    }, 500);
  }
  componentDidUpdate(
    prevProps: Readonly<SS>,
    prevState: Readonly<S>,
    snapshot?: any
  ): void {
    if (prevProps.Currentpage !== this.props.Currentpage) {
      const intervalId = setInterval(() => {
        let val = (this.props.Currentpage - 1) * 6;

        let indexdata: any = this.state.previousindex;
        indexdata.push(this.state.currentindex);

        this.setState({ previousindex: indexdata });
        this.setState({ currentindex: this.state.currentindex + 1 });
        if (this.state.currentindex >= 6 * this.props.Currentpage) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }
  render() {
    const { Currentpage, data } = this.props;
    const { postdata, previousindex } = this.state;
    let mapdata: any = [];

    if (Currentpage === 1) {
      mapdata = previousindex.filter((e: any, index: any) => {
        if (index <= Currentpage * 6) {
          return e;
        }
      });
    } else {
      mapdata = previousindex.filter((e: any, index: any) => {
        if (index < Currentpage * 6 && (Currentpage - 1) * 6 <= index) {
          return e;
        }
      });
    }

    return (
      <Box
        width={"100%"}
        margin={"auto"}
        textAlign={"center"}
        height={"400px"}
        overflow={"auto"}
        mt={"20px"}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={"20px"}>
          {mapdata
            ?.filter(this.handlefilter)
            ?.map((item: any, index: number) => {
              return <Cart item={data[item]} key={item} />;
            })}
        </Grid>
      </Box>
    );
  }
}
