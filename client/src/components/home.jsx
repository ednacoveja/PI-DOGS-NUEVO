import React from "react"
import { useState,useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import {getAllDogs} from "../redux/actions"


export default function home(){
    const dispatch = useDispatch()
    const allDogs=useSelector(state=>state.dogs)

    useEffect(()=>{
        dispatch(getAllDogs())
    },[])

    function handleClick(e){
        e.preventDefault()
        dispatch(getAllDogs())
    }


    return(
        <div>
            <Link to ="/dogs">Dog Create</Link>
            <h1>
                Aplicacion de perritos
            </h1>
            <button onClick={e=>handleClick(e)}>Volver a cargar la pagina de Home</button>

        </div>
    )
}