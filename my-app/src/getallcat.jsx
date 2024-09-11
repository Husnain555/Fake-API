import React, {useEffect, useState} from "react";
import {Card} from "./card";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export function GetByCat (){
    const {id} = useParams();

    const [value, setValue] = useState([])

    async function data (){
        try {
            const responce = await axios
                .get(`https://fakestoreapi.com/products/category/${id}`)
            setValue(responce.data)
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        data();
    }, []);

    return(
        <div>
            {value.map((item)=>{
                return <Card key={ item.id} title={item.title} image={ item.image}
                             description={ item.description } price={item.price} />
            })}
        </div>


    )


}