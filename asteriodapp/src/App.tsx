import React, { Component } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Asteriod from "./Components/Asteriod";
import Home from "./Components/Home";
interface Appstate {
  Asteriodid: string;
}
interface Appropos {
  navigator: any;
}
class App extends Component<Appropos, Appstate> {
  constructor(props: Appropos) {
    super(props);
    this.state = { Asteriodid: "" };
  }
  handelget = (e: string) => {
    this.setState({ Asteriodid: e });

    this.props.navigator("/asteriod");
  };

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home handelget={this.handelget} />}></Route>
          <Route
            path="/asteriod"
            element={<Asteriod Asteriodid={this.state.Asteriodid} />}
          ></Route>
        </Routes>
      </>
    );
  }
}
export default App;

export const Appnavigator = () => {
  const navigator = useNavigate();
  return <App navigator={navigator}></App>;
};
