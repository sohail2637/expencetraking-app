import transitions from "@material-ui/core/styles/transitions";

export default (state, action) => {
  switch (action.type) {
    case "DELETE-TRANSACTION":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transitions) => transitions.id !== action.payload
        ),
      };
    case "ADD-TRANSACTION":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    default:
      return state;
  }
};
