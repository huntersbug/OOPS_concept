import { Box ,Button} from "@chakra-ui/react";
import React, { Component } from "react";
import "../App.css";
interface S {
  data: {}[];
  handeldeletefunc:(arg:any)=>void
}

export default class Home extends Component<S> {
  constructor(props: S) {
    super(props);
  }
  handeldelete=(id:any)=>{
this.props.handeldeletefunc(id)
  }
  render() {
    const data = this.props.data
    return (
      <Box textAlign={"center"}>


        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Martial</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Delete</th>
          </tr>
          {data.map((e: any, index) => (

            <tr key={index}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.martial}</td>
              <td>{e.salary}</td>
              <td>{e.department}</td>
              <td><Button onClick={()=>this.handeldelete(e.id)}>Delete</Button></td>
            </tr>
          ))}

        </table>
      </Box>
    );
  }
}
