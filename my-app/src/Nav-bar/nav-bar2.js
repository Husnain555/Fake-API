import {useEffect, useState} from "react";
import {Card} from "../Card/card";
export function NavBar2() {
    const [value, setValue] = useState([])
    // console.log(value)
    const data = async () => {
        const datt = await fetch('https://fakestoreapi.com/products')
        const newdata = await datt.json();
        setValue(newdata);
    }


    useEffect(() => {
        data();


    }, []);

    return (

        <div>
            <h1 className='text-5xl italic   font-bold text-purple-600 text-center mt-[70px]'>MANNA STORE</h1>

            <div className='flex flex-row flex-wrap gap-[50px] p-[20px]' >
                {value.map((item) => {
                    return <Card title={item.title} description={item.description} image={item.image}
                                 price={item.price}/>


                })}

            </div>


        </div>
    )


}