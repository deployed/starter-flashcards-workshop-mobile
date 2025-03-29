import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `https://backend-4.w2025.deployed.space/api`,
});
