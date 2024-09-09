import {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "./card";

export function Geting() {
    const [value, setValue] = useState([])
    useEffect(() => {
        axios
            .get ('https://fakestoreapi.com/products').then(res =>
            setValue(res.data)
        ).catch(err => console.log(err));
    }, []);
    return(
        <div>
            {value.map((item)=>{
                return<Card title ={item.title} id={item.id}  description={item.description}  price = {item.price} src= {item.image} />


            })}


        </div>
    )


}