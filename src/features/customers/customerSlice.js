import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(name, nationalID) {
        return {
          payload: { name, nationalID, createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        // This part is correct; it's just redundant due to prepare handling the payload.
        state.name = action.payload.name;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { createCustomer, updateName } = customerSlice.actions;

// export default function reducerCustomer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         name: action.payload.name,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, name: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(name, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { name, nationalID, createdAt: new Date().toISOString() },
//   };
// }
// export function updateName(name) {
//   return {
//     type: "customer/updateName",
//     payload: name,
//   };
// }
