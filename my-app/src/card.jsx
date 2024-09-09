export const Card = (props) => (
    <div className="card">
        <img className="card-img" src={props.src} alt="" />
        <h1>
            {props.id}
        </h1>
        <p>{props.description}</p>
        <h5>{props.price}</h5>
    </div>
)