import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Home from "../Components/Home";


Enzyme.configure({ adapter: new Adapter() });

describe("Home components testing", () => {
    let wrapper: any
    beforeEach(() => {
        const data = [{}]
        const handeldeltefunc = () => { }
        wrapper = shallow(<Home data={data} handeldeletefunc={handeldeltefunc} />)
    })
    test("Button Present or not", () => {
        expect(wrapper.find("Button")).toHaveLength(1)
    })


})

describe("Function Called", () => {

    test("Function is Working Or Not", () => {
        const data = [{}]
        const mockFunction = jest.fn();
        let wrapper = shallow(<Home data={data} handeldeletefunc={mockFunction} />)
        const deletebutton = wrapper.find("Button")
        deletebutton.simulate("click")
        expect(mockFunction).toHaveBeenCalledTimes(1);
    })
})