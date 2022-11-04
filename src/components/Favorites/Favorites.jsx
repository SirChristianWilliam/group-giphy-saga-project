import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Favorites () {
    console.log('in Favorites');

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favorites);

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
{/* 
            <ul>Favorites Gifs: {favorites.map(giphys =>
                <li key={giphys.id}>
                    {giphys}
                </li>
            )}
            </ul> */}
        </>
    );
}

export default Favorites;