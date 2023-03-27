import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"



import Navbar from "../Components/Navbar"
describe("Test Case for the Country App", () => {


  test("check input box is present or not", () => {
    const handelget = () => { }

    render(<Navbar handelget={handelget} />)


    const inputtag = screen.getByPlaceholderText("enter the country")
    expect(inputtag).toBeInTheDocument()

  })

  test("check button is disabled", () => {
    const handelget = () => { }

    render(<Navbar handelget={handelget} />)

    const buttontag = screen.getByRole("button")
    expect(buttontag).toBeDisabled()

  })
  test("check input box is  Working or not", () => {
    const handelget = () => { }

    render(<Navbar handelget={handelget} />)

    const inputtext = screen.getByPlaceholderText("enter the country")
    const newValue = 'new value';
    fireEvent.change(inputtext, { target: { value: newValue } });

    expect(inputtext).toHaveValue(newValue)
  })


  test("check button is disabled", () => {
    const handelget = () => { }

    render(<Navbar handelget={handelget} />)

    const inputtext = screen.getByPlaceholderText("enter the country")
    const newValue = 'new value';
    fireEvent.change(inputtext, { target: { value: newValue } });
    const buttontag = screen.getByRole("button")
    expect(buttontag).not.toBeDisabled()
  })







})