import { useEffect, useState } from "react"
import styles from "./search.module.css"


const apiUrl = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "5a8c2cbeff5f4e0eadff722a5c62928e"


export default function Search({foodData, setFoodData}) {

    const [search_query, setSearchQuery] = useState("pizza")
    //syntax of useEffect hook
    // 1. callback function
    // 2. dependency list
    useEffect(()=>{
        async function fetchFood(){
            const apiResponse = await fetch(`${apiUrl}?query=${search_query}&apiKey=${apiKey}`)
            const finaldata = await apiResponse.json()
            console.log(finaldata.results)
            setFoodData(finaldata.results)
        }
        fetchFood()
    },[search_query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}
            value={search_query} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            type="text"></input>
        </div>
    )
}