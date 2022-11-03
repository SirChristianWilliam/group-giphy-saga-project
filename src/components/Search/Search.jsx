import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';


function Search() {
    let [newSearch, setNewSearch] = useState({ id: 0, name: '' });

    const dispatch = useDispatch();
    const addImage = (event) => {
        event.preventDefault();
        console.log('in addImage',newSearch.id)
        dispatch({
            type: 'FETCH_SEARCH',
            payload: {
                name: [newSearch.id] //sends the current id over, new search
                // is the object
                // setNewSearch({newSearch.id + 1, name: ''});

            }
        })
    }

    const handleChange = (event) => {
        event.preventDefault();
        console.log('in handleChange');
        setNewSearch({ ...newSearch, name: event.target.value })

    }

    return (
        <form
            className='formContainer'
            onSubmit={addImage}
        >

            <input
                type='text'
                value={newSearch.name}
                placeholder='Search for new image'
                onChange={handleChange}
            >
            </input>
            <button>Search</button>
        </form>
    )
}
export default Search;