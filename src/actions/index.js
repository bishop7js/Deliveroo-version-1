import Foods from "../apis/Foods";
import { SIGN_IN, SIGN_OUT, SHOW_FOODITEMS } from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const showFoodItems = () => async (distpatch) => {
  const response = await Foods.get("/foods");

  distpatch({
    type: SHOW_FOODITEMS,
    payload: response.data,
  });
};
