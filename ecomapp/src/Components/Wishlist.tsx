import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import WishlistCard from './WishlistCard'

export default class Wishlist extends Component<any> {
    constructor(props:any){
        super(props)
      }
      handelid=(id:any)=>{
this.props.handelremovewishlistdata(id)
      }
  render() {
    const {wishlist}=(this.props)
    return (
      <Box p={"20px"}>
{wishlist.length===0?<Text as={"b"}>Wish List Is Empty</Text>:
      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10} >
      
      {wishlist.length > 0 && wishlist.map((items: any) => (
      
        <WishlistCard {...items} key={items.id} wishlist={this.props.wishlist}   handelid={this.handelid}/>
      ))}
      
      </SimpleGrid>
      }
      
            </Box>
    )
  }
}
