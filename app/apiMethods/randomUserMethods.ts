import axios, { AxiosResponse } from "axios";
import { RandomUserData } from "@/app/TS_TYPES";
const RANDOM_USER_URL: string = "https://randomuser.me/api/?results=5";

export default async function getRandomUsers() {
  const response = await axios.get(RANDOM_USER_URL);
  const data = response.data;
  const results = data.results;
  console.log("DATA");
  console.log(typeof data);
  console.log(data);
  return results;
}
