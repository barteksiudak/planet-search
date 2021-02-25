import React, { useCallback, useState } from 'react';
import InputSearchable from '../../components/InputSearchable';
import List, { Item } from '../../components/List';
import { searchPlanet } from '../../compositions';
import { TPlanet } from '../../types';
import PlanetItem from './PlanetItem';

interface IPlanets {
  onPlanetClick?: (planet: TPlanet) => void;
}

export default function Planets({ onPlanetClick }: IPlanets) {
  const [planetsList, setPlanetsList] = useState([]);
  const onResponse = useCallback((response) => {
    setPlanetsList(response);
  }, []);

  const handlePlanetClick = useCallback(
    (planet: TPlanet) => () => {
      if (onPlanetClick) {
        onPlanetClick(planet);
      }
      console.log(`The planet <${planet.name}> has been clicked`);
    },
    [onPlanetClick]
  );

  return (
    <div>
      <InputSearchable<TPlanet> onResponse={onResponse} query={searchPlanet} />
      <List>
        {planetsList.map((planet: TPlanet) => (
          <Item key={planet.name} onClick={handlePlanetClick(planet)}>
            <PlanetItem {...planet} />
          </Item>
        ))}
      </List>
    </div>
  );
}
