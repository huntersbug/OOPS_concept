import React,{Component} from "react"
interface Appstate{
count:number
}
export default class Foo extends Component<{},Appstate> {
  constructor(props:any) {
    super(props);
    this.state = { count: 2 };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 className={`clicks-${count}`}>
          {count} clicks
        </h1>
        <a href="url" onClick={() => { this.setState({ count: count + 1 }); }}>
          Increment
        </a>
      </div>
    );
  }
}
