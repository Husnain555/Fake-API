export function Card2 (props) {
    return (
        <div>
            <img className="card-img-top" src={props.img} alt=""/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h3>{props.price}</h3>

        </div>
    )
}