// app/recipe/[id]/page.js
import Button from "@/components/Button";
import axios from "axios";
import Link from "next/link";

async function getRecipe(id) {
  const apiKey = "bf861a0cc9fc42fdbca349c78b14ab56";
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

  if (!recipe)
    return <div className="text-center h-[100vh] w-[]">Recipe not found</div>;

  return (
    <div className="text-center w-[375px] mt-20">
      <div className="w-[375px] ml-8 md:w-[768px] lg:w-[1006px] xl:w-[1525px]">
        <h1 className="text-4xl font-bold mt-10">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mt-5 rounded-xl"
        />
        <p>{recipe.readyInMinutes}</p>
        <p className="text-xl mt-5 text-start">
          {recipe.instructions || "No instructions available"}
        </p>
        <h2>Nutrition Information</h2>
        <p>{recipe.nutrition}</p>
        <h2 className="text-2xl font-bold mt-10">Ingredients:</h2>
        <ul className="list-disc text-start mt-5">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <h1>View more recipes</h1>

        <div className="w-[200px] h-[40px] ml-40 mt-5">
          <Link href={"/recipe"}>
            <Button>View More</Button>
          </Link>
        </div>
      </div>

      <div className="w-[510px] mt-32 text-center">
        <div className="text-center bg-[#F2F2F2] py-4">
          <h1 className="text-4xl font-bold">Send Reviews</h1>
          <div className="mt-10">
            <label
              htmlFor="email"
              className="absolute px-2 text-2xl font-semibold"
            >
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              className="border-2 w-[350px] rounded-lg border-orange-500 pl-20  text-2xl"
            />
            <textarea
              rows={3}
              className="border-2 border-orange-500 text-2xl pl-2 mt-5 rounded-lg w-[350px]"
            />

            <div className="w-[150px] mt-5 ml-44 h-[40px]">
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
