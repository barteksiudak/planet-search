import { shallow } from 'enzyme';
import { InputSearchable } from '../../components';
import Planets from '../Planets';

describe('Planets', () => {
  it('is Planets component', () => {
    const wrapper = shallow(<Planets />);
    expect(wrapper.find(InputSearchable)).toHaveLength(1);
  });
});
