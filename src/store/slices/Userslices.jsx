import { createSlice } from "@reduxjs/toolkit";
import { removeAllUser } from "../actions";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    //reducers are big reducer
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload)
    },
    
    removeUser(state, action) {
      // console.log("hii" + action.payload);

      // state.pop(action.payload)

      state.splice(action.payload, 1);
    }, // under the reducers this are micro reducer like (add user,removeUser,deleteUser)


    // clearAllUsers(state, action) {
    //  return [];
    // },
  },

  extraReducers(builder){
    builder.addCase(removeAllUser,()=>{
      return [];
    })
  }
});

// console.log(UserSlice)

export default UserSlice.reducer;

export const { addUser, removeUser } = UserSlice.actions;
