
import { screen, render, fireEvent } from "@testing-library/react"
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

import Home from "../Components/Home"

describe("First check the Element Is present in dom or not", () => {
  const gettodos = () => void


    test("Render the P tag is Available Or Not", () => {
      render(<Home handelget={gettodos} />)
      const ptag = screen.getByText("Asteriod App")
      expect(ptag).toBeInTheDocument()

    })
  test("No of Button is Present is Equal to 2 or Not", () => {
    render(<Home handelget={gettodos} />)
    const button = screen.queryAllByRole("button")
    expect(button).toHaveLength(2)

  })
  test("One Input Tag is Present or Not", () => {
    render(<Home handelget={gettodos} />)
    const inputtag = screen.getByPlaceholderText("Enter Asteriod Id")
    expect(inputtag).toBeInTheDocument()

  })
  test("Button tag  is Present or Not", () => {
    render(<Home handelget={gettodos} />)
    const submit_button = screen.getByText("Submit")
    expect(submit_button).toBeInTheDocument()
  })
  test("Button tag  is disable", () => {
    render(<Home handelget={gettodos} />)
    const submit_button = screen.getByText("Submit")
    expect(submit_button).toBeInTheDocument()
    expect(submit_button).toBeDisabled()

  })
  test("Input Text", () => {
    render(<Home handelget={gettodos} />)
    const inputtext = screen.getByPlaceholderText("Enter Asteriod Id")

    const newValue = 'new value';
    fireEvent.change(inputtext, { target: { value: newValue } });

    expect(inputtext).toHaveValue(newValue);

  })

  test("Check Button is Not Disabled After Entering  Text", () => {
    render(<Home handelget={gettodos} />)
    const inputtext = screen.getByPlaceholderText("Enter Asteriod Id")

    const newValue = 'new value';
    fireEvent.change(inputtext, { target: { value: newValue } });
    const submit_button = screen.getByText("Submit")

    expect(submit_button).not.toBeDisabled()
})
})
