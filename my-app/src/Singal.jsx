import axios from "axios";
import React, {useEffect, useState} from "react";
import {Card2} from "./card2";
import {useParams} from "react-router-dom";

export function Singal(props) {


    const [value, setValue] = useState([])
    const {id} = useParams()

    async function get (){
        const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setValue(responce.data)
        console.log(responce.data)
    }
    useEffect(()=>{
        get();
    },[])

    return(
        <div className='border-4 w-[300px] h-[450px] p-[10px]'>
            <img className='w-[300px] h-[300px]' src={value.image}/>

            <h1 className='font-bold '>{value.title}</h1>
            <p className='line-clamp-2'>{value.description}</p>
            <h3 className='border-4 w-[25%] text-center ml-[30%]'>{value.price}$</h3>
        </div>
    )



}
