const getTableData = (state = {}, action) => {
  switch (action.type) {
    case "SHOW":
      state = action.payload;
      return { tableData: action.payload };
    case "DEMO":
      console.log(state, "demo");
      return { ...state };
    default:
      return { state };
  }
};
export default getTableData;
