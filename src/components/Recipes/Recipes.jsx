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
        <div className=" grid grid-cols-2 gap-6">
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