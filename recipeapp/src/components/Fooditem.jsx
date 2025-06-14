import styles from "./fooditem.module.css"
export default function Fooditem(props){
    return (
        <div className={styles.foodItemContainer}>
            <img className={styles.foodItemImage}
            src={props.eachFoodItem.image}></img>
            <h1 className={styles.foodItemTitle}>{props.eachFoodItem.title}</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.foodItemButton}>View Recipe</button>
            </div>
            
        </div>
    )
}