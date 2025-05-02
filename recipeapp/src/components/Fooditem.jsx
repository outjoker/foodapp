export default function Fooditem(props){
    return (
        <div>
            <img src={props.eachFoodItem.image}></img>
            <h1>{props.eachFoodItem.title}</h1>
            <button>View Recipe</button>
        </div>
    )
}