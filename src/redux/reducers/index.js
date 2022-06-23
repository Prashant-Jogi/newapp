const intitialState = {};
const getTableData = (state, action) => {
  switch (action.type) {
    case "DATASHOW":
      const data = action.payload.data;
      state = data;
      console.log(state, "state");
      return { state };
    case "UPDATE":
      return { ...state };
    default:
      return { state };
  }
};
export default getTableData;
