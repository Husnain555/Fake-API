import axios from "axios";
import {useEffect, useState} from "react";
import {Card} from "./card";

export function Cart () {

    const [value, setValue] = useState([]);

    const item = async function () {
        try {const responce = await axios.get('https://fakestoreapi.com/carts')
        console.log(responce.data);
        setValue(responce.data);}
catch (error) {

    console.log(error);}}
    useEffect(() => {
        item();
    }, []);


return (
        <div>
            {value.map((item1)=>{
                return <Card
                    key={item1.id} description={item1.userid} loo={ item1.date} />

            })}

        </div>
    )
}
