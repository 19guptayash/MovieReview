import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{

    },
    favourite:[],
    watchList:[]
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        // hello:()=>{
        //     console.log("Heloo");
        // }
    }

});


// export const {hello} = userSlice.actions;

export default userSlice.reducer;
