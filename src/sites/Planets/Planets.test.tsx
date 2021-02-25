import { shallow } from 'enzyme';
import Planets from '../Planets';

describe('Planets', () => {
  it('is Planets', () => {
    const wrapper = shallow(<Planets />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
