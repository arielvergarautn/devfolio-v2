import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Search = () => {

    const [search, setSearch] = useState('');
    const history = useHistory();

    //Handlers
    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/work/${search}`)
    }

    return (
        <form className='search' onSubmit={submitHandler}>
            <input type="text" placeholder='Look into my work' />
            <button type='submit' onClick={submitHandler}>
                Search
            </button>
        </form>
    )
}

export default Search
