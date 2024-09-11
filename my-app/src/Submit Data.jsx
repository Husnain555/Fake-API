import {useEffect, useState} from "react";
import axios, {post} from "axios";

export function SubmitData() {

    const [image, setImage] = useState(null)
    const [val, setVal1] = useState({ProductName:'',description:'',Category:'',Price:''})

    const imagePreview = (e)=>{
        if (e.target.files && e.target.files[0]){
            setImage(URL.createObjectURL(e.target.files[0]))}}
const submit =async ()=>{
        const send = await axios.post('https://fakestoreapi.com/products',JSON.stringify(val))

    console.log(send.data)
}



    return (
        <form>
        <div className='flex flex-col gap-[10px] w-[50%] p-[200px] justify-center ml-[400px] h-[430px] text-center border-4 '>
            <label className=' font-bold' >Product name
                <input onChange={(e)=>setVal1({...val, ProductName: e.target.value})} className='w-[0400px] h-[50px] border-2 rounded-2xl text-2xl text-center'
                       placeholder={'Please enter product Name'} type={'text'} name={'text'}/>
            </label>
            <label className=' font-bold'>Enter description:
                <input onChange={(e)=>setVal1({...val,description:e.target.value})} className=' ml-3 w-[400px] h-[50px] border-2 rounded-2xl text-2xl' placeholder={'Please enter product detail'} type={'text'} name={'text'}/>
            </label>
            <label className=' font-bold'>Select Category:
                <select className='ml-3 w-[400px] h-[30px] rounded-2xl' onChange={(e)=>setVal1({...val,Category:e.target.value})}>
                <option>Jewelery</option>
                <option>Electronics</option>
                <option>Men's Clothing</option>
                <option>woman Clothing</option>
                </select>
            </label>
            <label className=' font-bold'>Enter Price in USDT:
                <input onChange={(e)=>setVal1({...val,Price:e.target.value})} className='rounded-2xl w-[400px] h-[30px] ml-3' placeholder={'Please enter product price'} type={'number'} name={'number'}/>
            </label>

            <label className='font-bold'>Select a Image:
                <input  className='ml-[100px] rounded ' onChange={imagePreview} type={'file'} name={'file'}/>
                <img alt="preview image" src={image}/>

            </label>
            <label className=' font-bold'>Click Here To Submit:
                <button type='button' onClick={submit} className='border-2 w-[100px] rounded-2xl cursor-pointer hover:bg-[pink] text-center ml-[20px]  mt-4'>Submit</button>
            </label>
        </div>
        </form>

    )

}