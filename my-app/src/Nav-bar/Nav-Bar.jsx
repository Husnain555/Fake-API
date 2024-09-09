import photo from '../photos/Gemini_Generated_Image_x8c7h4x8c7h4x8c7.jpeg'
import {PiShoppingCartSimpleBold} from "react-icons/pi";
import {ImMenu} from "react-icons/im";
export function NavBar() {
    return (

        <div className='flex flex-row items-center justify-between'>
            <div>
                <ImMenu className='mb-[60px] text-3xl'/>

            </div>

            <div>
                <img className='h-20 w-20 rounded-2xl ml-3 mt-1' src={photo} alt={'MANNA STORE'}/>
            </div>
            <div>
                <  PiShoppingCartSimpleBold className='text-4xl mr-3 mb-[60px] ' id='navbar'/>


            </div>


        </div>

    )
}