import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeHead from './components/RecipeHead/RecipeHead'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleCookButton = (recipe) => {
    const isExist = wantToCook.find(item => recipe.recipe_id === item.recipe_id);
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
    }
    else {
      const toastContainer = document.getElementById('toast-container');
      toastContainer.classList.remove('hidden');
      setTimeout(() => {
        toastContainer.classList.add('hidden');
      }, 2000)
    }
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <section className='mb-10 lg:mb-24'>
        <RecipeHead></RecipeHead>
        <div className='flex flex-col lg:flex-row gap-6 container mx-auto'>
          <Recipes handleCookButton={handleCookButton}></Recipes>
          <Sidebar setWantToCook={setWantToCook} wantToCook={wantToCook}></Sidebar>
        </div>
      </section>
    </>
  )
}

export default App
