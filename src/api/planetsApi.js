import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export default class PlanetsApi {
  static async getPlanet(id) {
    return await axios.request({
      url: `${BASE_URL}/planets/${id}`,
    });
  }

  static async getPlanets(url = `${BASE_URL}/planets/?page=1`) {
    return await axios.request({
      url,
    });
  }
}
