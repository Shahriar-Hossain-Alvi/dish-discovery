import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeHead from './components/RecipeHead/RecipeHead'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipeHead></RecipeHead>
      <Recipes></Recipes>
    </>
  )
}

export default App
