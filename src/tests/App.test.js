import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
it('should have two components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').children()).toHaveLength(2);
});
it('renders a result display and buttons', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('Display').length).toBe(1)
  expect(wrapper.find('Panel').length).toBe(1)
})
});