import { Box } from '@chakra-ui/react'
import React, { Component } from 'react'
import LinkNavbar from './Components/LinkNavbar'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Electronic from './Components/Electronic'
import Mens from './Components/Mens'
import Womens from './Components/Womens'
import Jewellery from './Components/Jewellery'
import Wishlist from './Components/Wishlist'
export default class App extends Component {
  state = { data: [], wishlist: [] ,wishitem:[]}
 
  componentDidMount(): void {
    this.getdata()
  }
  
  getdata = () => {
    fetch(`https://fakestoreapi.com/products`).then((res) => res.json()).then((data) => {

      this.setState({ data: data })
    }).catch((err) => {
      console.log(err)
    })
  }
  handeladdwishlistdata = (id: number) => {
 
    let newcategory = [...this.state.wishlist];
    
    let value = newcategory.some((e: any) => {
      return e.id === id;
    });
    if (value) {
      
      let filterarray = newcategory.filter((e: any) => {
        if (e.id !== id) {
          return e
        }
      })
      
      this.setState({ wishlist: filterarray })
    } else {
      let option = this.state.data.filter((e: any) => e.id === id)
      newcategory.push(option[0]);

      this.setState({ wishlist: newcategory })
    }


  }
  handelremovewishlistdata=(id:any)=>{
    let newcategory = [...this.state.wishlist];
    let filterarray = newcategory.filter((e: any) => {
      if (e.id !== id) {
        return e
      }
    })
    
    this.setState({ wishlist: filterarray })
  }
  render() {
    return (
      <Box textAlign={"center"}>
        <Navbar />
        <LinkNavbar />
        <Routes>
          <Route path="/" element={<Home data={this.state.data} handeladdwishlistdata={this.handeladdwishlistdata} wishlist={this.state.wishlist}/>}></Route>
          <Route
            path="/electronic"
            element={<Electronic data={this.state.data} wishlist={this.state.wishlist} handeladdwishlistdata={this.handeladdwishlistdata}/>}
          ></Route>
          <Route
            path="/mens"
            element={<Mens data={this.state.data} wishlist={this.state.wishlist} handeladdwishlistdata={this.handeladdwishlistdata}/>}
          ></Route>
          <Route
            path="/womens"
            element={<Womens data={this.state.data} wishlist={this.state.wishlist} handeladdwishlistdata={this.handeladdwishlistdata}/>}
          ></Route>
          <Route
            path="/jewellery"
            element={<Jewellery data={this.state.data} wishlist={this.state.wishlist} handeladdwishlistdata={this.handeladdwishlistdata}/>}
          ></Route>
          <Route
            path="/wishlist"
            element={<Wishlist wishlist={this.state.wishlist} handelremovewishlistdata={this.handelremovewishlistdata}/>}
          ></Route>
        </Routes>
      </Box>
    )
  }
}
