import { OPEN_OVERLAY, CLOSE_OVERLAY } from "./actions";

const reducer = (state, action) => {
  if (action.type === OPEN_OVERLAY) {
    return { ...state, is_overlay_open: true };
  }
  if (action.type === CLOSE_OVERLAY) {
    return { ...state, is_overlay_open: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
