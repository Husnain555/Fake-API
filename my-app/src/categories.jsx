import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function Categories(props) {
    const [value, setValue] = useState([])
    async function getCategories() {
        const responce = await axios.get('https://fakestoreapi.com/products/categories')
        console.log(responce.data)
        setValue(responce.data)
    }

    useEffect(() => {
        getCategories();
    }, []);
    return (

        <div className="flex flex-row justify-between items-center mt-[50px] ">
            {value.map((item) => {
                return(
                    <Link to={`/all-categories/${item}`} key={item}>
                    <div className='border-4 border-[red] w-[100px] h-[100px] mt-[15px] pt-[15px] pl-[10px] bg-purple-600'>
                        <h1>{item}</h1>

                    </div>
                    </Link>
                )
            })}



        </div>
    )
}