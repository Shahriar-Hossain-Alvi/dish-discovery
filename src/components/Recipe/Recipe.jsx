import PropTypes from 'prop-types';
import '../../index.css'

const Recipe = ({ recipe, handleCookButton }) => {

    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='border border-[#28282833] rounded-2xl p-6'>
            <img className='rounded-2xl h-48 w-full' src={recipe_image} alt="recipe-image" />
            <h2 className='my-6 lexend text- font-semibold text-[#282828]'>{recipe_name}</h2>
            <p className='text-[#878787] fira-sans pb-4 '>{short_description}</p>
            <div className='pt-6 pb-4 border-t border-b'>
                <p className='lexend text-lg font-medium text-[#282828]'>Ingredients: {ingredients.length}
                </p>
                <ul className='text-[#878787] text-lg fira-sans'>
                    {ingredients.map((item, index) => <li key={index} className='list-disc list-inside'>{item}</li>)}
                </ul>
            </div>
            <div className='flex gap-4 py-6'>
                <span className='flex gap-2 fira-sans text-[#282828CC] text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {preparing_time}
                </span>
                <span className='flex gap-2 fira-sans text-[#282828CC] text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>

                    {calories}
                </span>
            </div>
            <button onClick={()=>handleCookButton(recipe)} className='btn bg-[#0BE58A] rounded-full btn-lg text-[#150B2B] lexend text-lg font-medium hover:text-[#0BE58A] hover:bg-[#150B2B]'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCookButton: PropTypes.func.isRequired,
};

export default Recipe;