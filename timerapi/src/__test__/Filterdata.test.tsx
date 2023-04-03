import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Filterdata from "../Components/Filterdata";
Enzyme.configure({ adapter: new Adapter() });


describe("The filter components", () => {
    let wrapper: any
    beforeEach(() => {
        const handelfilterslaray = () => { }
        const handeldept = () => { }
        wrapper = shallow(<Filterdata handelfilterslaray={handelfilterslaray} handeldept={handeldept} />)
    })
    test("Select is present or not", () => {
       const select = wrapper.find("Select")
        expect(select).toHaveLength(2)
    })
    test("option is present or not", () => {
        const option = wrapper.find("option")
         expect(option).toHaveLength(7)
     })
})

