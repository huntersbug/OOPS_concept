
import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { Component } from 'react'
import Itemcard from './Itemcard'
interface SS {
  data: {}[]
  handeladdwishlistdata:(argu:number)=>void
  wishlist:{}[]
}
export default class Home extends Component<SS>{
  constructor(props: SS) {
    super(props)
  }
  handelid=(id:number)=>{
   
this.props.handeladdwishlistdata(id)
  }
  render() {
    const { data } = this.props
    return (
      <Box p={"20px"}>
        <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10} >

          {data.length > 0 && data.map((items: any) => (

            <Itemcard {...items} key={items.id} handelid={this.handelid} wishlist={this.props.wishlist}/>
          ))}

        </SimpleGrid>
      </Box>
    )
  }
}
