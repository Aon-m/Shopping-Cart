import axios from "axios";

export default async function fetcherWithAxios(url) {
  const response = await axios.get(url);
  return response.data;
}
