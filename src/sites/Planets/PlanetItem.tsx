import { getDate } from '../../compositions';
import { TPlanet } from '../../types';
import { PlanetNameStyled, PlanetStyled } from './PlanetsStyled';

export default function PlanetItem({ name, gravity, created }: TPlanet) {
  return (
    <PlanetStyled>
      <PlanetNameStyled>{name}</PlanetNameStyled>
      <div>
        <div>
          Gravity: <strong>{gravity}</strong>
        </div>
        <div>
          Create Date: <strong>{getDate(created)}</strong>
        </div>
      </div>
    </PlanetStyled>
  );
}
