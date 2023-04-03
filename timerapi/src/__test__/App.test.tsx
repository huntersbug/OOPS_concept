import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });
describe("Test case for App components", () => {
    let wrapper: any
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    test("The Navbar components is mounted or Not", () => {
        const components = wrapper.find("Navbar");
        expect(components.exists()).toBe(true);
    });
    test("The Home components is mounted or Not", () => {
        const components = wrapper.find("Home");
        expect(components.exists()).toBe(false);
    });
    test("The Filter components is mounted or Not", () => {
        const components = wrapper.find("Filterdata");
        expect(components.exists()).toBe(true);
    });
});
