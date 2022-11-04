import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
 

function Search() {

    const dispatch = useDispatch();
    let [newSearch, setNewSearch] = useState({ id: 0, name: '' });
    const images = useSelector(store => store.search);

    const addImage = (event) => {
        event.preventDefault();
        console.log('in addImage', newSearch.name)
        dispatch({
            type: 'FETCH_SEARCH',
            payload: {
                name: newSearch.name //sends the current id over, new search
                // is the object
                // setNewSearch({newSearch.id + 1, name: ''});

            }
        })
    }

    const handleChange = (event) => {
        event.preventDefault();
        console.log('in handleChange');
        console.log('event.target.value', event.target.value)
        setNewSearch({ ...newSearch, name: event.target.value })

    }
   
    function genreClick() {
        event.preventDefault();
        console.log('in genreClick');
        dispatch({
            type: 'ADD_FAVORITE',
            payload: {
                url: image.images.downsized_large.url
            }
        })
    }
    return (
        <>
       
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

            <ul>
                {images.map(image => (
                    <li key={image.images.downsized_large.url}>
                        <img  
                            src={image.images.downsized_large.url}
                        />  
                        <select className="selectContainer">
                            <option value="0">Select Genre</option>
                            <option onClick={genreClick} value="1">Funny</option>
                            <option onClick={genreClick} value="2">Cohort</option>
                            <option onClick={genreClick} value="3">Cartoon</option>
                            <option onClick={genreClick} value="4">NSFW</option>
                            <option onClick={genreClick} value="5">Meme</option>
                        </select>                    
                    </li>

                ))}
            </ul>

            
    </>);
}
export default Search;