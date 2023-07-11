import {  useCallback,useEffect,useState} from 'react';
import Recipes from './Recipe';
import video from './food1.mp4'
import './App.css';

function App() {
  const MY_ID = "7391fdd1";
  const MY_KEY ="bef58dfcb3ff0fe0c10feaee88a8d114";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('salmon')

  const getRecipe = useCallback( async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits)
  },[wordSubmitted])

  useEffect(()=> {
    getRecipe()
  },[getRecipe])


const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}
const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}
  return (
    <div className="App">
        
        <div className="container">
      <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1 className='title'>Find a Recipe</h1>
      </div> 

        <div className='container cont'>
          <form onSubmit={finalSearch}>
            <input className='search' onChange={myRecipeSearch} value={mySearch} placeholder='Search...'/>
            <div className='container'><button >Submit</button></div>
          </form>
          
        </div>

        

    <div className='container'>
    <div className="containerTwo">
        {myRecipes.map(element => (
          <Recipes 
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}/>
        ))}
        </div>
    </div>
    
    
        
        
    </div>
  );
}

export default App;
