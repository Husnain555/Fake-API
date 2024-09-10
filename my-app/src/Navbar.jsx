import photo from './Photos/manna.pnj'
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";
export function Navbar() {
    return (
        <div>
            <div className='flex justify-between mt-4   '>
                <div>
                    <img className='w-[60px] h-[60px] ml-3 rounded-2xl' src={photo} alt='Manna Store'/>
                </div>
                <div className='text-2xl'>
                    <FaShoppingCart/>

                </div>
                <div className='gap-3 mr-3 text-2xl '>
                    <a href={"/"} className='border-2 mr-4 border-[blue] hover:bg-[pink] cursor-pointer'>Home</a>
                    <a href={'/categories'} className='border-2 mr-4 border-[blue] hover:bg-[pink] cursor-pointer'>categories</a>
                    <a className='border-2 mr-4 border-[blue] hover:bg-[pink] cursor-pointer'>contact Us</a>
                </div>

            </div>
            <h1 className='text-6xl text-center mt-[50px] font-bold font-mono text-purple-600'>Shop here For Quality</h1>
        </div>
    )
}