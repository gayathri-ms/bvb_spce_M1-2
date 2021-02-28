import { API } from '../../backend';

export const getAllProducts = () => {
  console.log('get all products calls');
  return fetch(`${API}/products`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
