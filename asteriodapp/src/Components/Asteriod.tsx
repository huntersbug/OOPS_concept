import { Box, Button, Link, Spinner } from "@chakra-ui/react";
import  { Component } from "react";

interface AsteriodProps {
  Asteriodid: string;
}

interface AsteriodState {
  Asteriodid: string;
  is_potentially_hazardous_asteroid: string;
  nasa_jpl_url: string;
  name: string;
}
export default class Asteriod extends Component<AsteriodProps, AsteriodState> {
  constructor(props: AsteriodProps) {
    super(props);
    this.state = {
      Asteriodid: props.Asteriodid,
      is_potentially_hazardous_asteroid: "",
      nasa_jpl_url: "",
      name: "",
    };
  }

  getdata = () => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${this.props.Asteriodid}/?api_key=Qdk55jfPtMZ8n6Dek7SPPx2FXkY2O1rTql9qu8an`
    )
      .then((res: any) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          is_potentially_hazardous_asteroid:
          res.is_potentially_hazardous_asteroid,
          nasa_jpl_url: res.nasa_jpl_url,
          name: res.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount(): void {
    if (this.state.Asteriodid.length > 0) {
      this.getdata();
    }
  }

  render() {
    const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } =
      this.state;
    return (
      <>
        <Button
          textAlign={"center"}
          mt={"20px"}
          padding={"20px"}
          justifyContent={"center"}
          ml={"50px"}
        >
          <Link href="/" textDecoration={"none"}>Go Back Home Page</Link>
        </Button>

        <Box
          width={"30%"}
          height={"300px"}
          margin={"auto"}
          mt={"100px"}
          border={"2px solid teal"}
          borderRadius={"20px"}
          boxShadow={"dark-lg"}
          textAlign={"center"}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>Asteriod</h1>
          {name === "" ? (
            <Spinner color="red.500" />
          ) : (
            <Box width={"100%"} h={"80%"} margin={"auto"}>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  display: "inline",
                  fontWeight: "bold",
                  marginRight: "15px",
                }}
              >
                Name:
              </h1>
              <span>{name}</span>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "15px",
                }}
              >
                URL:
              </h1>
              <span>{nasa_jpl_url}</span>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "15px",
                }}
              >
                Hazardous:
              </h1>
              <span>
                {is_potentially_hazardous_asteroid ? "True" : "False"}
              </span>
            </Box>
          )}
        </Box>
      </>
    );
  }
}
