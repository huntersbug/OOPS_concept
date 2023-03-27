import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Pagination from "../Components/Pagination";

Enzyme.configure({ adapter: new Adapter() });
describe("check button", () => {
    let wrapper: any
    beforeEach(() => {
        const count = 0
        const Currentpage = 0
        const handelchangepage = () => { }
        const handeldecre = () => { }
        wrapper = shallow(<Pagination count={count}
            Currentpage={Currentpage}
            handelchangepage={handelchangepage}
            handeldecre={handeldecre} />)
    })
    it("button present in pagination", async () => {
        expect(wrapper.find("Button")).toHaveLength(4)
    });
    it("button present in pagination", async () => {
        let prevbutton = wrapper.find("Button").filterWhere((btn: any) => btn.text() === "Prev")

        expect(prevbutton).toHaveLength(1)
    });

})

describe("Checked The funcrion", () => {
    it('should invoke a function when clicked', () => {
        const mockFunction = jest.fn();
        const count = 0
        const Currentpage = 0
        let wrapper = shallow(<Pagination count={count}
            Currentpage={Currentpage}
            handelchangepage={mockFunction}
            handeldecre={mockFunction} />)
        let nextbutton = wrapper.find("Button").filterWhere((btn: any) => btn.text() === "Prev")
    nextbutton.simulate('click');
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
    it('should invoke a function when clicked', () => {
        const mockFunction = jest.fn();
        const count = 0
        const Currentpage = 0

        let wrapper = shallow(<Pagination count={count}
            Currentpage={Currentpage}
            handelchangepage={mockFunction}
            handeldecre={mockFunction} />)
        let nextbutton = wrapper.find("Button").filterWhere((btn: any) => btn.text() === "Next")
        nextbutton.simulate('click');
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

})