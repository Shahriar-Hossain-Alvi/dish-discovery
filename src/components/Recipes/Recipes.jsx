import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleCookButton}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipeData.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleCookButton={handleCookButton}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleCookButton: PropTypes.func.isRequired,
};

export default Recipes;