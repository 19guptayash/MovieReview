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

<<<<<<< HEAD
=======
});


// export const {hello} = userSlice.actions;

>>>>>>> 06e1303efcdae5d37563d107c95c1aeefb8efaff
export default userSlice.reducer;
