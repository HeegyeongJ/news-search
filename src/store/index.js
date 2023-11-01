import { configureStore, createSlice } from '@reduxjs/toolkit';





export const fetchNewsData = (searchValue) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=698fb8601daf4b75b37ddc98ccd12a8c`)
            if (!response.ok) {
                throw new Error('failure');
            }
            const data = response.json();
            return data;
        }
        try {
            const newsData = await fetchData();
            dispatch(newsActions.fetchNews(newsData));
        } catch (error) {
            console.error('errrr')
        }
    }
}


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
    },
    reducers: {
        fetchNews(state, action) {
            state.news = action.payload
        }
    }
})

export const newsActions = newsSlice.actions

const store = configureStore({
    reducer: newsSlice.reducer
});

export default store;