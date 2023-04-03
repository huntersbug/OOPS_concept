import { Box, Button, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import { FaHeart } from 'react-icons/fa'

export default class WishlistCard extends Component <any>{
    constructor(props:any){
        super(props)
    }
    handeladdtocart=()=>{

    }
    handelwishlist=(id:any)=>{
this.props.handelid(id)
    }
  render() {
    const { image, id, description, category, price, title, rating, wishlist } =
    this.props;
    let newcategory = [...wishlist];
    let value = "black";
    {
      value = newcategory.some((e: any) => {
        return e.id === id;
      })
        ? "orange"
        : "black";
    }
    return (
        <Box
        border={"1px solid teal"}
        width={"100%"}
        height={"400px"}
        borderRadius={"15px"}
        margin={"auto"}
      >
        <Box width={"95%"} height={"55%"} margin={"auto"} position={"relative"}>

          <img src={image} style={{   margin: "auto" }} className="imageitem"/>
          <Box position={"absolute"} top={"10%"} right={"0%"}>
            <FaHeart
              fontSize={"30px"}
              color={value}
              onClick={() => this.handelwishlist(id)}
            />
          </Box>
        </Box>
        <Box
          width={"95%"}
       
     
          border={"0.5px solid grey"}
          margin={"auto"}
          borderRadius={"20px"}
        >
          <Text as={"b"}>{title}</Text>
          <Text>Rating: {rating.rate} ({rating.count})</Text>
          <Text >Price:{price}</Text>
        </Box>
        <Box
          width={"95%"}
          height={"20%"}
        
          margin={"auto"}
        >
        <Button padding={"2px"} mt={"10px"} colorScheme="twitter" onClick={this.handeladdtocart}>Add to Cart</Button>
        </Box>
      </Box>
    )
  }
}
