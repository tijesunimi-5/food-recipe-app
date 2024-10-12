// app/recipe/[id]/page.js
import axios from "axios";

async function getRecipe(id) {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
}

export default async function RecipePage({ params }) {
  const { id } = params;
  const recipe = await getRecipe(id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mt-5 rounded-xl" />
      <p className="text-xl mt-5">
        {recipe.instructions || "No instructions available"}
      </p>
      <h2 className="text-2xl font-bold mt-10">Ingredients:</h2>
      <ul className="list-disc list-inside mt-5">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}
