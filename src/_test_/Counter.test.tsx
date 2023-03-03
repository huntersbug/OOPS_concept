import Enzyme, { shallow } from "enzyme";
import Foo from "../Components/Counter";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { count } from "console";
Enzyme.configure({ adapter: new Adapter() });
describe("button Enzyme test case", () => {

    test("The first test case", () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.find('.clicks-2').length).toEqual(1);
        wrapper.find('a').simulate('click');
        expect(wrapper.find('.clicks-3').length).toEqual(1);

    })
    test("The counter test case", () => {

        const wrapper = shallow(<Foo />);
        //  expect(wrapper.state().count).toEqual(5);
         expect(wrapper.state()).toEqual({"count":2});
        wrapper.find('a').simulate('click');
        expect(wrapper.state('count')).toEqual(3);
        wrapper.find('a').simulate('click');
        expect(wrapper.state('count')).toEqual(4);

    })







})