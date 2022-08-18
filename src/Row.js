import React,{useState,useEffect} from 'react';
import axios from "./axios"
import './Row.css'


const base_url="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLargeRow,isSmallRow}) {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    // console.log(movies);


  return (
    <>
        <h2 className='category'>{title}</h2>
        <div className="row_posters">
            {
                movies.map(movie=>(
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"} ${isSmallRow && "row_posterSmall"}`}
                    src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                    alt={movie.name}
                    />
                ))
            }

        </div>
    </>
  )
}

export default Row