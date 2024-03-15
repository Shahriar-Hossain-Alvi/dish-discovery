import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeHead from './components/RecipeHead/RecipeHead'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <section>
        <RecipeHead></RecipeHead>
        <div className='flex gap-6 container mx-auto'>
          <Recipes></Recipes>
          <Sidebar></Sidebar>
        </div>
      </section>
    </>
  )
}

export default App
