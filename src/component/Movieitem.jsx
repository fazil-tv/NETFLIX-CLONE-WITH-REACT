import React, { useState } from 'react'
import { CreateImageUrl } from '../services/moviSeris'
import { FaHeart, FaRegHeart } from "react-icons/fa"; 
import { useAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firbacse";


function Movieitem({movie}) {
    const {title,backdrop_path ,poster_path} = movie;
    const [like, setLike] = useState(false)
    const {user} = useAuth()
  


    const likeMovie = async() => {
        const userEmail = user?.email
    
        console.log(userEmail);
        
    
        if(userEmail) {
          const userDoc = doc(db,'users',userEmail);
          setLike(!like)
          await updateDoc(userDoc, {
            likeMovie: arrayUnion({ ...movie })
          })
        } else {
          alert('login to Save')
        }
      }
    

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-40 object-cover object-top"
        src={CreateImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-bold">
          {title}
        </p>
        <p onClick={likeMovie}  className="cursor-pointer">{like?<FaHeart size={20} className="absolute top-2 left-2 text-gray-300" /> :<FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />}</p>
        {/* <p className="cursor-pointer">{like ? <FaHeart size={20} className="absolute top-2 left-2 text-gray-300" /> : <FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />}</p> */}
      </div>
    </div>
  )
}

export default Movieitem