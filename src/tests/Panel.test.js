import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it("should contain a wrap", () => {
    const wrapper = shallow(<Panel />);
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("component-panel")
    ).toEqual(true);
  });
  it("should have five child divs", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(".component-panel").children("div")).toHaveLength(5);
  });
  it("should have nineteen buttons", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find("div").children("Button")).toHaveLength(19);
  });
});