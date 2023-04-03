import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { Component } from 'react'
import ElectronicCard from './ElectronicCard'

export default class Jewellery extends Component<any> {
  constructor(props:any){
    super(props)
  }
  handelid=(id:number)=>{
   
    this.props.handeladdwishlistdata(id)
      }
  render() {
    const {data}=(this.props)
    const filterdata=data?.filter((e:any)=>{
      if(e.category==="jewelery"){
        return e
      }
    })
    console.log(data)
    return (
      <Box p={"20px"}>

      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10} >
      
      {filterdata.length > 0 && filterdata.map((items: any) => (
      
        <ElectronicCard {...items} key={items.id} wishlist={this.props.wishlist}   handelid={this.handelid}/>
      ))}
      
      </SimpleGrid>
      
            </Box>
    )
  }
}
