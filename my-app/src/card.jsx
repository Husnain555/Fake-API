import {Link} from "react-router-dom";

export const Card = (props) => (
    <div className='w-[500px] h-[350px] text-wrap justify-center text-center mt-[200px]'>

        <img className="w-[300px] h-[300px]  text-center flex justify-center " src={props.image} alt="" />

        <p className='font-bold line-clamp-3  w-[300px] '>{props.description}</p>
       <h4>{props.key}</h4>
        <h5>{props.loo}</h5>
        <h5 className='border-2 border-[blue] hover:bg-[pink] cursor-pointer w-[100px] ml-[100px] mt-[25px]'>{ props.price}$</h5>
        <Link to={`/product/${props.id}`}>{props.id}</Link>
        {/*<Link to={`/all-categories/${props.item}`}>{props.key}</Link>*/}
    </div>
)