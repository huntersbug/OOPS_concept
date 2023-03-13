import React, { Component } from 'react'
import {
    Table,
    Thead,
    Tbody,

    Tr,
    Th,
    Td,

    TableContainer,
    Box,
    Text,
    Image,
    Button,
} from '@chakra-ui/react'
import Tempt from './Tempt'
interface SS {
    info: any[]
}
interface S {
    isModal: true | false
    temptobject: any
    temp: string
    image: string
    condition: string
}
export default class Countrytabel extends Component<SS, S> {
    constructor(props: SS) {
        super(props)
        this.state = { isModal: false, temptobject: null, temp: "", image: "", condition: "" }
    }
    gettempt = (city: any) => {
        fetch(`http://api.weatherstack.com/current?access_key=8bb0585f21db205bdc920a3699818c00&query=${city}`).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, "res",)
            this.setState({ temp: res.current.temperature, image: res.current.weather_icons[0], condition: res.current.weather_descriptions[0] })
        }).catch((err) => console.log(err))
        this.setState({ isModal: true, temptobject: city })
    }

    handelclose = () => {

        this.setState({ isModal: false, temptobject: null })
    }
    render() {
        const { image, condition, temp } = this.state
        let maparray = this.props.info
        return (
            <Box
                width={"80%"} margin={"auto"} mt={"50px"} >
                <Text as={"b"}>Country Details</Text>
                <TableContainer>

                    <Table variant='simple'>


                        <Thead>
                            <Tr>
                                <Th>Country</Th>
                                <Th>Capital</Th>
                                <Th>Population</Th>
                                <Th >Flag</Th>
                                <Th >Temperature</Th>
                                <Th >Lat lng</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {maparray?.map((e, index) => (
                                <>
                                    <Tr key={index}>
                                        <Td>{e.name.common}</Td>
                                        <Td>{e.capital
                                        [0]}</Td>
                                        <Td >{e.population
                                        }</Td>
                                        <Td>
                                            <Image src={e.flags.png} />
                                        </Td>
                                        <Td ><Button onClick={() => this.gettempt(e.capital
                                        [0])}>Get Tempt</Button></Td>
                                        <Td >{e.latlng.join(" , ")}</Td>
                                    </Tr>
                                    <Tempt isOpen={this.state.isModal} isClose={this.handelclose} cityinfo={this.state.temptobject} temp={temp} image={image} condition={condition} />
                                </>
                            ))}
                        </Tbody></Table>
                </TableContainer></Box>
        )
    }
}
