// import { createSlice } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import axios from "axios";
// const intitialState = {
//   sample: 0,
// };

// // const getTableData = (state = intitialState, action) => {
// //   console.log(action, "data reducers");
// //   switch (action.type) {
// //     case "DATASHOW":
// //       const data = action.payload;
// //       return [...data];
// //     case "UPDATE":
// //       break;
// //     default:
// //       return { sample: "start" };
// //   }
// // };
// // export default getTableData;
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     category: "Visitor",
//     brand: "Select",
//     childDropDownisVisible: false,
//     userAccessToken: "",
//     email: "",
//     userInfo: {},
//     roleinfo: [],
//     storeInfo: {},
//     storeList: [],
//     breandList: [],
//   },
//   reducers: {
//     appCategory: (state, action) => {
//       console.log(action.payload, "action.payloadaction.payloadaction.payload");
//       state.category = action.payload;
//       // state.childDropDownisVisible = action.payload.falg;
//       console.log("category slice :", state.category);
//       // console.log("category flag :", state.childDropDownisVisible);
//     },
//     devTools: true,
//     getData: () => {
//       return async (state, action) => {
//         await axios.get("http://localhost:5000/userData").then((res) => {
//           console.log(res, "data");
//         });
//       };
//     },
//   },
// });
// export const { appCategory } = counterSlice.actions;
// export default counterSlice.reducer;
