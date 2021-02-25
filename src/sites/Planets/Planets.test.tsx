import { mount, shallow } from 'enzyme';
import InputSearchable from '../../components/InputSearchable';
import List, { Item } from '../../components/List';
import { searchPlanet } from '../../compositions';
import { TPlanet } from '../../types';
import Planets from '../Planets';

const getPlanet = (name: string): TPlanet => ({
  name,
  gravity: `gravity - ${name}`,
  created: '2021-02-25T09:41:16.840Z',
  url: `url - ${name}`,
});

jest.mock(
  '../../components/InputSearchable',
  () => ({
    onResponse,
    query,
  }: {
    onResponse: (planets: TPlanet[]) => void;
    query?: typeof searchPlanet;
  }) => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href="/"
        onClick={() => {
          onResponse([getPlanet('1'), getPlanet('2'), getPlanet('3')]);
        }}
      />
    );
  }
);

describe('Planets', () => {
  it('is Planets', () => {
    const wrapper = shallow(<Planets />);
    expect(wrapper.find(InputSearchable)).toHaveLength(1);
    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(Item)).toHaveLength(0);
  });

  it('has some planets', () => {
    const wrapper = mount(<Planets />);
    wrapper.find('a').simulate('click');

    expect(wrapper.find(Item)).toHaveLength(3);
  });

  it('has clickable planets', () => {
    const onPlanetClickMock = jest.fn();
    const wrapper = mount(<Planets onPlanetClick={onPlanetClickMock} />);
    wrapper.find('a').simulate('click');
    wrapper.find(Item).first().simulate('click');

    expect(onPlanetClickMock).toHaveBeenCalledTimes(1);
    expect(onPlanetClickMock).toHaveBeenCalledWith(getPlanet('1'));
  });
});
