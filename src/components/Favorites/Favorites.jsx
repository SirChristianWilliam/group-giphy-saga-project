import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Favorites () {
    console.log('in Favorites');

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);

    console.log('favorites', favorites);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        dispatch({
            type: 'FETCH_FAVORITES'
        })

    }

    return (
        <>
            <h3>Favorites</h3>

            <ul>
                {favorites.map(gif=>{
                    return(
                        <li key={gif.id}>
                            <img src={gif.url}></img>
                            <p>Category: {gif.name}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Favorites;