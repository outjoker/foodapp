import { useState } from 'react'
import Search from './components/Search'
import Foodlist from './components/Foodlist'
import Nav from './components/Nav'
import "./App.css"


function App() {
  //state to capture the api result of search bar (when text is entered in the search bar)
  const [foodData, setFoodData] = useState([])

  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData = {setFoodData}/>
      
     <Foodlist foodData={foodData} />
    </div>
  )
}

export default App
