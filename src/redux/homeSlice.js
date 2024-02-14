import { createSlice } from "@reduxjs/toolkit"
import { MOVIES_FREE, MOVIES_POPULAR, MOVIES_RENT, TRENDING_URL_TODAY,TRENDING_URL_WEEK, TV_FREE, TV_POPULAR} from "../services/Constants";
const initialState = {
    trending:[],
    trendingTabs:[
        {
            title:"Today",
            url :TRENDING_URL_TODAY,
            active:true
        },
        {
            title:"This Week",
            url:TRENDING_URL_WEEK,
            active:false
        }
    ],

    popular:[],
    popularTabs:[
        {
            title:"In Theaters",
            url: MOVIES_POPULAR,
            active:true,
        },

        {
            title:"ON TV",
            url: TV_POPULAR,
            active:false,
        },

        {
            title:"For Rent",
            url: MOVIES_RENT,
            active:false,
        }
    ],

    free:[],
    freeTabs:[
        {
            title:"Movies",
            url:MOVIES_FREE,
            active:true
        },
        {
            title:"TV Shows",
            url:TV_FREE,
            active:false
        }
    ]
}

const updateTab = (tabs,index)=>{
    let newTabs = tabs.map((tab,ind)=>{
        if(ind===index){
            return {
                ...tab,
                active:true
            }
        }
        else if(tab.active){
            return {
                ...tab,
                active:false,
            }
        }
        else{
            return {...tab}
        }
    });
    return newTabs;
}

export const homeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{
        updateTrending:(state,data)=>{
            
            state.trending = data.payload
        },

        updatePopular:(state,data)=>{
            state.popular  = data.payload
        },

        updateFree:(state,data)=>{
            state.free  = data.payload
        },

        updateTrendingTabs:(state,data)=>{

            let newTabs = updateTab(state.trendingTabs,data.payload);
            state.trendingTabs = newTabs;
        },

        updatePopularTabs:(state,data)=>{
            let newTabs = updateTab(state.popularTabs,data.payload);
            state.popularTabs = newTabs;
        },

        updateFreeTabs:(state,data)=>{
            let newTabs = updateTab(state.freeTabs,data.payload);
            state.freeTabs = newTabs;
        },

        
        
    }
});
export const {updateTrending,updatePopular,updateFree,updateTrendingTabs,updateFreeTabs,updatePopularTabs} = homeSlice.actions;

export default homeSlice.reducer;