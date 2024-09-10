import {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "./card";

export function Geting() {
    const [value, setValue] = useState([])

    async function get() {

        try {
            const responce = await axios.get('https://fakestoreapi.com/products')
            setValue(responce.data)
        } catch (error) {

        }
    }

        useEffect(() => {
            get();
        }, [])



        return (
            <div className='flex  flex-wrap justify-center  text-center ml-[20px]   '>

                {value.map((item) => {
                    return (
                        <  Card
                            key={item.id}

                            description= {item.description} image={item.image} id={item.id} price={item.price}/>
                    )
                })}


            </div>
        )


    }