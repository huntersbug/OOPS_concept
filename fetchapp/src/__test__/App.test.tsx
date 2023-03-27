

import App from "../App";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";


Enzyme.configure({ adapter: new Adapter() });

describe("Enzyme   test case", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it("The first test case", () => {
    expect(wrapper.find("Input").length).toEqual(1);
  });
  it("The second test case", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Text").text()).toContain(
      "Please Wait Data is Loading"
    );
  });

  it("updates state when user types in input field", () => {
    const input = wrapper.find("Input");
    input.simulate("change", { target: { value: "Hello, world!" } });
    expect(wrapper.state("text")).toEqual("Hello, world!");
  });
  it("Spinner is present", () => {
    expect(wrapper.find("Spinner").length).toEqual(1);
  });
  it("Pagination Components", () => {
    const divElement = wrapper.find("Pagination");
    expect(divElement.exists()).toBe(true);
  });
  it("Userpost Components", () => {
    const divElement = wrapper.find("UserPost");
    expect(divElement.exists()).toBe(false);
  });
  it("should have an array in state with a length of 0 initial", () => {
    const arrayInState = wrapper.state("data");
    expect(arrayInState.length).toBe(0);
  });
  it("fetch the data", async () => {
    const arraylength = wrapper.state("data").length;
    await wrapper.instance().getdata();
    const newArrayLength = wrapper.state("data").length;
    expect(newArrayLength).toBeGreaterThan(arraylength);
  });
  it("fetch the data", async () => {
    const arraylength = wrapper.state("data").length;
    await wrapper.instance().getdata();
    const newArrayLength = wrapper.state("data").length;
    expect(newArrayLength).toBeGreaterThanOrEqual(20);
  });

});
