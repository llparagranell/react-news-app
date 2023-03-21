import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk('fetchNews', async () => {
    let country = 'in';
    let category = "general"
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=161dc1f30f4e49708bcb8825969b6432`);
    return response.json();
})

const newsSlice = createSlice({
    name:"news",
    initialState:{
        isLoading:false,
        data:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNews.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchNews.fulfilled,(state,action)=>{
            state.isLoading = true;
            state.data = action.payload;
        })
    }
})
export default newsSlice.reducer;