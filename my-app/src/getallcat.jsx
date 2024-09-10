import React, {useEffect, useState} from "react";
import {Card} from "./card";
import axios from "axios";

export function GetByCat (){

    const [value, setValue] = useState([])

    async function data (){
        try {
            const responce = await axios.get('https://fakestoreapi.com/products/category/jewelery')
            console.log(responce.data)
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
                return <Card title={item.title} image={ item.image} description={ item.description } price={item.price} key={ item.id} id={item.id} />
            })}

        </div>


    )


}