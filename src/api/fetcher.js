import axios from "axios";

const fetcher = axios.create({
  baseURL: " https://red-onion-server01.herokuapp.com",
});

export default fetcher;
