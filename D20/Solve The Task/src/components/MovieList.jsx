import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';
import CircularIndeterminate from './LoadingIcon';
import RecipeReviewCard from './Card';


const MovieList = () => {

    const [movies, setMovies] = useState(null);
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    // on ComponentDidMount
    useEffect(() => {
        const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
        const url = "https://api.themoviedb.org/3";
        const path = "/discover/movie?sort_by=popularity.desc";
        const apiUrl = url + path + apiKey;

        axios.get(apiUrl)
        .then(response => setMovies(response.data.results)) 
    }, []);


    return (
        <div className='movie-card-container'>
            {movies?movies.map((movie) => <RecipeReviewCard key={uuid()} movie={movie} imgPath={imgPath}/>):<CircularIndeterminate/>}
        </div>
    )
}

export default memo(MovieList);
