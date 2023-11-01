import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewsData } from './../store/index';

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const searchValueSubmit = () => {
        dispatch(fetchNewsData(inputValue));
    }

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input onChange={inputChangeHandler} />
            <button onClick={searchValueSubmit}>검색</button>
        </div>
    );
};

export default Input;