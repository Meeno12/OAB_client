export default function deviceReducer(
  state = 640 >= window.innerWidth,
  action
) {
  switch (action.type) {
    case "SET_DEVICE":
      return action.payload;
    default:
      return state;
  }
}
