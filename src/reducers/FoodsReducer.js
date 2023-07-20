import { SHOW_FOODITEMS } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_FOODITEMS:
      return action.payload;
    default:
      return state;
  }
};
