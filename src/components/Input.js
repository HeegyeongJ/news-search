import React, { useState } from 'react';

const Input = ({ getSearchValue }) => {
    const [inputValue, setInputValue] = useState('')
    const searchValueSubmit = () => {
        getSearchValue(inputValue);
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