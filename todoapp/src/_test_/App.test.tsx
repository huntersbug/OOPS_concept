import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Home from '../Components/Home';
import Todo from '../Components/Todo';
Enzyme.configure({ adapter: new Adapter() });

describe("Checked the Dom", () => {
  test('renders learn react link', () => {
    render(<App />);

    const button = screen.getByText("Create Todo");
    fireEvent.click(button);

    const buttonAdd = screen.getByText("Add")


    expect(buttonAdd).toHaveAttribute('disabled');
    const inputtext = screen.getByPlaceholderText("enter title")

    const newValue = 'new value';
    fireEvent.change(inputtext, { target: { value: newValue } });

    expect(inputtext).toHaveValue(newValue);
    const inputdes = screen.getByPlaceholderText("enter description")

    const textvalue = 'new value';
    fireEvent.change(inputdes, { target: { value: newValue } });

    expect(inputdes).toHaveValue(newValue);
  });


  test('Button is not disabled', () => {
    render(<App />);
    const button = screen.getByText("Create Todo");
    fireEvent.click(button);
    const des = screen.getByPlaceholderText("enter description")
    const text = screen.getByPlaceholderText("enter title")
    const textvalue = 'new value';

    fireEvent.change(des, { target: { value: textvalue } });
    fireEvent.change(text, { target: { value: textvalue } });
    const Addbutton = screen.getAllByRole("button", { name: "Add" })
    expect(Addbutton[0]).not.toHaveAttribute('disabled');
  });
})


describe("First Enzyme test case", () => {
  const todos = [{}]
  const gettodos = () => { }
  test("The first test case", () => {
    const Wrapper = shallow(<App />)

    expect(Wrapper.find(Todo)).toHaveLength(1);
    expect(Wrapper.find(Home)).toHaveLength(1);

  })

})

describe("button Enzyme test case", () => {



  test("The Snapshot of app test case", () => {
    const Wrapper = shallow(<App />)
    expect(Wrapper).toMatchSnapshot()

  })
})