import { recipes } from './data2.js';

interface RecipeProps {
    id : string;
    name : string;
    ingredients : string[];
}

const Recipe = ({ id, name, ingredients } : RecipeProps) => {
    return (
        <div>
          <h2>{name}</h2>
          <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
    );
}

const RecipeList = () => {
    return (
        <div>
          <h1>Recipes</h1>
          {recipes.map(recipe =>
            <Recipe {...recipe} key={recipe.id} />
          )}
        </div>
    );
}

export default RecipeList;
