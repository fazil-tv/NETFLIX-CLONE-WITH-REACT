import React, { useEffect, useState } from 'react'
import endpoints, { CreateImageUrl } from '../services/moviSeris'
import axios from 'axios';

function Banner() {

    const [movie, setmovis] = useState({})

    useEffect(() => {
        axios.get(endpoints.popular).then((response) => {
            const movi = response.data.results
            const randommovi = movi[Math.floor(Math.random() * movi.length)];
            console.log(randommovi);
            console.log(movi);
            setmovis(randommovi)
        })

    }, [])

    if (!movie) {
        return (
            <p>fetching movie.....</p>
        );


    } else {

        const truncate = (str, length) => {
            if (!str) return "";

            return str.length > length ? str.slice(0, length) + "...." : str;
        };

        const { title, backdrop_path, release_date, overview } = movie

        console.log(backdrop_path)
        console.log(title)
        return (
            <div className='w-full h-[550px] lg:h-[750px]'>
                <div className='w-full h-full' >
                    <div className="absolute w-full h-[550px] lg:h-[750px] bg-gradient-to-r from-black" />

                    <img className="w-full h-[550px] lg:h-[750px] object-cover object-top"
                        src={CreateImageUrl(backdrop_path,'original')} alt={title} />
                    <div className='absolute w-full top-[30%] lg:top-[50%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-6xl font-nsans-bold'>{title}</h1>
                        <div className='mt-8 mb-4'>
                            <button className='capitalize border bg-gray-300 py-2 px-5  text-black'>play</button>
                            <button className='capitalize border border-gray-300 py-2 px-5 ml-4' >Wacth later</button>
                        </div>
                        <p className='text-gray-400 text-sm'>{release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview, 165)}</p>
                    </div>
                </div>
            </div>
        )       
    }
}

export default Banner