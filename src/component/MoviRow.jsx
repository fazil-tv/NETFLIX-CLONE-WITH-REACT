import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movieitem from './Movieitem';

function MovieRow({ title, url }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => setMovies(res.data.results));
    }, [url]);

    console.log(movies);

    return (
        <>
            <h2 className="font-medium md:text-xl p-4 capitalize">{title}</h2>
            <div className="relative flex items-center">
                <div id={'slider'} className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <Movieitem movie={movie} />
                        </div>
                        // <h1>{movie.title}</h1>
                    ))}
                </div>
            </div>
        </>
    );
}


export default MovieRow