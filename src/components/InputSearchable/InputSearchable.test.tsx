import { mount } from 'enzyme';
import InputSearchable from './InputSearchable';

describe('InputSearchable', () => {
  const onResponseMock = jest.fn();
  const queryMock = jest.fn();

  it('is InputSearchable', () => {
    const wrapper = mount(
      <InputSearchable<{}> onResponse={onResponseMock} query={queryMock} />
    );
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
