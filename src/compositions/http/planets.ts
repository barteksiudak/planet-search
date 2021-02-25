import http from './http';

export function searchPlanet(phrase: string) {
  return http.get(`/planets/?search=${phrase}`);
}
