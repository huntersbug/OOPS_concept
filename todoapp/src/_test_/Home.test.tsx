import {
    screen, render, getAllByTestId, fireEvent
} from "@testing-library/react";
import Home from "../Components/Home";


describe("Check the button", () => {

    const todos = [{}]
    const gettodos = () => {

    }
    test("Button is in dom", () => {
        render(<Home todos={todos} gettodos={gettodos} />)

        const button1 = screen.getByText("Edit")
        expect(button1).toBeInTheDocument()

    })
    test("input box is in dom", () => {
        render(<Home todos={todos} gettodos={gettodos} />)

        const checkbox = screen.getByRole("checkbox")
        expect(checkbox).toBeInTheDocument()

    })

    test("input box is in dom", () => {
        render(<Home todos={todos} gettodos={gettodos} />)

        const button = screen.getByTestId("deletebutton")
        expect(button).toBeInTheDocument()

    })
    test('renders a component with two buttons', () => {
        render(<Home todos={todos} gettodos={gettodos} />);
        const buttons = screen.queryAllByRole("button")
        expect(buttons).toHaveLength(2);
    });

    test('renders a component with two buttons', () => {
        render(<Home todos={todos} gettodos={gettodos} />);
        const button = screen.getByTestId('deletebutton');
        expect(button.textContent).toBe("Delete");
    });


    test('renders a component with two buttons', () => {
        render(<Home todos={todos} gettodos={gettodos} />);
        const button = screen.getByText('Edit');
        expect(button.textContent).toBe("Edit");
    });





   








})