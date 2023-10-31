import { createStore } from 'redux'

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
            dispatch({ type: 'fetch', data: newsData });
        } catch {

        }
    }
}

const fetchReducer = (state = { news: [] }, action) => {
    if (action.type === 'fetch') {
        return {
            ...state,
            news: action.data
        }
    }
    return state;
}

const store = createStore(fetchReducer);

export default store;