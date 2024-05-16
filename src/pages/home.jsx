import React from 'react'
import Hero from '../component/hero'
import MovieRow from '../component/MoviRow'
import endpoints from '../services/moviSeris'



function Home() {
  return (
    <>

      <Hero />
      <MovieRow title={"upcoming"} url={endpoints.upcoming} />
      <MovieRow title={"trending"} url={endpoints.trending} />
      <MovieRow title={"top rated"} url={endpoints.topRated} />
      <MovieRow title={"comedy"} url={endpoints.comedy} />
      <MovieRow title={"popular"} url={endpoints.popular} />
  
    </>
  )
}

export default Home