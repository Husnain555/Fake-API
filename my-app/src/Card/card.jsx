export function Card(props) {
    return (

            <div className='border-2 w-[400px] mt-[100px] h-auto fit '>
                <img className='w-full h-[300px]' src={props.image} alt={props.alt}/>

                <h1>{props.title}</h1>
                <p className='line-clamp-4'>{props.description}</p>
                <p>{props.price}</p>

            </div>

    )
}
