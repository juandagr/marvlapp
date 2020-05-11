import { constructApiCall } from "./config";

export const getCharacters = (params = []) =>
  constructApiCall("public/characters", params);
