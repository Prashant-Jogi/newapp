import { ActionType } from "../actions/action-Type";

const getTableData = (state = {}, action) => {
  switch (action.type) {
    case ActionType.SHOW:
      state = action.payload;
      return { tableData: action.payload };
    case ActionType.DEMO:
      // console.log(state, "demo");
      return { ...state };
    case ActionType.updateData:
      console.log(action.payload, "action");
      return { tableData: action.payload };
    case ActionType.CHANGE:
      console.log(action.payload, "change");
      return { tableData: action.payload };
    default:
      return { state };
  }
};
export default getTableData;
