import * as React from "react";
import { Box } from "@chakra-ui/react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Filterdata from "./Components/Filterdata";

export default class App extends React.Component {
  state = { data: [], wholedata: [] };
  updatestate = (items: any) => {
    items = { ...items, id: this.state.wholedata.length + 1 }
    this.setState({ data: [...this.state.data, items], wholedata: [...this.state.wholedata, items] });
  };

  handelfilterslaray = (e: any) => {

    const employees = this.state.data
    if (e === "lte") {
      employees.sort(function (a: any, b: any) {
        return a.salary - b.salary;
      });
    } else {
      employees.sort(function (a: any, b: any) {
        return b.salary - a.salary;
      });
    }
    this.setState({ data: employees })
  }
  handeldept = (des: any) => {
    const employees = this.state.wholedata
    let filterarray = employees.filter((e: any) => {
      if (des === "Show All") {
        return e
      }
      else if (e.department === des) {
        return e
      }
    })

    this.setState({ data: filterarray })

  }
  handeldeltefunc = (id: any) => {
    const newdata = this.state.wholedata.filter((e: any) => {
      if (e.id !== id) {
        return e
      }
    })
 this.setState({wholedata:newdata,data:newdata})
  }
  render() {
    return (
      <Box textAlign={"center"}>
        <Navbar updatestate={this.updatestate} />
        <Filterdata handelfilterslaray={this.handelfilterslaray} handeldept={this.handeldept} />
        {this.state.data.length>0?  <Home data={this.state.data} handeldeletefunc={this.handeldeltefunc} />:""}
      
      </Box>
    );
  }
}
