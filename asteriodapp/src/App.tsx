import  { Component } from "react";
import { useNavigate } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";

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
     <AllRoutes handelget={this.handelget} Asteriodid={this.state.Asteriodid} />
      </>
    );
  }
}
export default App;

export const Appnavigator = () => {
  const navigator = useNavigate();
  return <App navigator={navigator}></App>;
};
