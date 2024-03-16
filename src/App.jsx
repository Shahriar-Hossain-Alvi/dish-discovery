import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeHead from './components/RecipeHead/RecipeHead'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleCookButton = (recipe)=>{
    const isExist = wantToCook.find(item => recipe.recipe_id === item.recipe_id);
    if(!isExist){
      setWantToCook([...wantToCook, recipe]);
    }
    else{
      alert('Already added!');
    }
  }
  console.log('Want to cook this dish!', wantToCook);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <section>
        <RecipeHead></RecipeHead>
        <div className='flex gap-6 container mx-auto'>
          <Recipes handleCookButton={handleCookButton}></Recipes>
          <Sidebar></Sidebar>
        </div>
      </section>
    </>
  )
}

export default App
