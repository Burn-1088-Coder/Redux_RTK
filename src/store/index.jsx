import { configureStore } from "@reduxjs/toolkit";

import  UserSlice  from "./slices/Userslices";


const store = configureStore({
    reducer:{
        Users:UserSlice,
    },
})

export default store