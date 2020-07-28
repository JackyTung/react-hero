import { ajax } from 'rxjs/ajax';

const HEROS_ENDPOINT = 'https://hahow-recruit.herokuapp.com/heroes';

export const fetchHeros = () =>
  ajax({
    method: 'GET',
    url: HEROS_ENDPOINT,
    crossDomain: true,
  });
