import Fooditem from "./Fooditem";

export default function Foodlist({foodData}) {
    return (

        <div>

            {foodData.map((eachFoodItem) => (
                <Fooditem eachFoodItem={eachFoodItem}/>
                
                
            ))}
        </div>
    )
}