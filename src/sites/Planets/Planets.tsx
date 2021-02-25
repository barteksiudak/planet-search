import { useCallback, useState } from 'react';
import InputSearchable from '../../components/InputSearchable';
import { searchPlanet } from '../../compositions';
import { TPlanet } from '../../types';

export default function Planets() {
  const [planetsList, setPlanetsList] = useState([]);
  const onResponse = useCallback((response) => {
    setPlanetsList(response);
  }, []);

  return (
    <div>
      <InputSearchable<TPlanet> onResponse={onResponse} query={searchPlanet} />
      <ul>
        {planetsList.map((planet: TPlanet) => (
          <li key={planet.name}>
            {planet.name}/{planet.gravity}/{planet.created}
          </li>
        ))}
      </ul>
    </div>
  );
}
