"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";
import { jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [snackRecipes, setSnackRecipes] = useState([]);
  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  const [dessertRecipes, setDessertRecipes] = useState([]);
  const [beverageRecipes, setBeverageRecipes] = useState([]);
  const [vegetableRecipes, setVegetableRecipes] = useState([]);
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [LunchRecipes, setLunchRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const apiKey = "bf861a0cc9fc42fdbca349c78b14ab56";
  const router = useRouter();

  const searchRecipes = async () => {
    const storedRecipes = localStorage.getItem("searchRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setSearch(parsedRecipes);
      return;
    }
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=10`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("searchRecipe", JSON.stringify(results));
      setSearch(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchRecipes = async () => {
    const storedRecipes = localStorage.getItem("allRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setRecipes(parsedRecipes);
      return;
    }
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=35`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("allRecipe", JSON.stringify(results));
      setRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const snackRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=snack&number=15`;
    const storedRecipes = localStorage.getItem("snackRecipes");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setSnackRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("snackRecipes", JSON.stringify(results));
      setSnackRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const cuisineRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=snack&number=15`;
    const storedRecipes = localStorage.getItem("cuisineRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setCuisineRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("cuisineRecipe", JSON.stringify(results));
      setCuisineRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const dessertRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=desserts&number=15`;
    const storedRecipes = localStorage.getItem("dessertRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setDessertRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("dessertRecipe", JSON.stringify(results));
      setDessertRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const beverageRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=beverages&number=15`;
    const storedRecipes = localStorage.getItem("beverageRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setBeverageRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("beverageRecipe", JSON.stringify(results));
      setBeverageRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const vegetableRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=vegetable&number=15`;
    const storedRecipes = localStorage.getItem("vegetableRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setVegetableRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("vegetableRecipe", JSON.stringify(results));
      setVegetableRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const breakfastRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=breakfast&number=15`;
    const storedRecipes = localStorage.getItem("breakfastRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setBreakfastRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("breakfastRecipe", JSON.stringify(results));
      setBreakfastRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const lunchRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&query=lunch&number=15`;
    const storedRecipes = localStorage.getItem("lunchRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setLunchRecipes(parsedRecipes);
      return;
    }

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      localStorage.setItem("lunchRecipe", JSON.stringify(results));
      setLunchRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    // Fetch default recipes or based on a query
    fetchRecipes();
    snackRecipe();
    cuisineRecipe();
    dessertRecipe();
    beverageRecipe();
    vegetableRecipe();
    breakfastRecipe();
    lunchRecipe();
  }, []);

  const handleSearch = () => {
    searchRecipes();
  };

  //to remove every html tag from spoonacular result
  const stripHtml = (html) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(html, "text/html");
    return dom.body.textContent || "";
  };

  return (
    <div className="w-screen overflow-x-hidden md:w-screen lg:w-screen xl:w-screen">
      {/* Search */}
      <div className="mt-20">
        <div className="py-2 px-4 text-black relative md:ml-0 lg:ml-0 md:flex md:justify-center md:items-center">
          <input
            type="text"
            id="text"
            value={query}
            className="border-2 relative rounded-lg bg-transparent backdrop:blur-3xl border-orange-500 text-[18px] pl-2 h-[34px] w-[350px] md:w-[500px]"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            styles={
              "absolute right-3 h-[30px] py-0 top-2.5 shadow-none rounded-r rounded-l-none md:relative md:h-[36px] md:pt-1 md:bg-orange-500 md:text-white md:rounded-xl  md:ml-5 md:mt-0 md:top-0"
            }
          >
            Search
          </Button>
        </div>
      </div>

      {/* search result */}
      <div className="relative">
        <h1 className="text-center mt-10 text-3xl font-bold text-[1.4em] text-col">
          Search Result
        </h1>
        <div className="overflow-x-scroll scroll-smooth md:overflow-hidden overflow-hidden">
          {search.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex gap-4 pl-4 overflow-hidden">
              {search.map((recipe) => (
                <div className="lg:flex">
                  <Card key={recipe.id}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl"
                      />
                      <div className="w-[350px]">
                        <h1 className="text-2xl mt-2">{recipe.title}</h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[17px] text-center font-semibold">No search</p>
          )}
        </div>
      </div>

      {/* gen recipe */}
      <div className="relative">
        <h1 className="mt-10 text-[1.6em] text-col pl-5">Recipes</h1>
        <div className="overflow-x-scroll md:overflow-x-hidden scroll-smooth overflow-hidden mt-5 md:mx-3 rounded-xl">
          {recipes.length > 0 ? (
            <div
              key={recipes.id}
              className="w-[500px] overflow-x-scroll flex gap-7 pl-4 overflow-hidden md:w-screen rounded"
            >
              {recipes.map((recipe) => (
                <div key={recipe.id} className="">
                  <Card key={recipe.id} styles={"md:w-[300px] lg:w-[400px]"}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-screen"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-[1.3em] mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[300px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>
                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl pl-5 font-semibold">
              Recipe unavailable at the moment try again later
            </p>
          )}
        </div>
      </div>

      {/* Cuisine recipe */}
      <div className="relative">
        <h1 className="mt-10 text-[1.6em] text-col pl-5">Cuisine Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden mt-5 md:mx-3 rounded-xl">
          {cuisineRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex gap-4 pl-4 overflow-hidden md:w-screen">
              {cuisineRecipes.map((recipe) => (
                <div className="">
                  <Card key={recipe.id} styles={"md:w-[300px] lg:w-[400px]"}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-screen"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl pl-5 font-semibold">
              Recipe unavailable at the moment try again later
            </p>
          )}
        </div>
      </div>

      {/* Snack recipe */}
      <div className="relative">
        <h1 className="mt-10 text-[1.6em] text-col pl-5">Snack Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden mt-5 rounded-xl md:w-screen">
          {snackRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex gap-4 pl-4 overflow-hidden md:w-screen">
              {snackRecipes.map((recipe) => (
                <div className="lg:flex">
                  <Card key={recipe.id} styles={"md:w-[300px] lg:w-[400px]"}>
                    <div className="text-center  ">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-screen"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl pl-5 font-semibold">
              Recipe unavailable at the moment try again later
            </p>
          )}
        </div>
      </div>

      {/* Dessert recipe */}
      <div className="relative">
        <h1 className="mt-10 text-[1.6em] text-col pl-5">Dessert Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth mt-5 overflow-hidden rounded-xl md:mx-3">
          {dessertRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex gap-4 pl-4 overflow-hidden md:w-screen">
              {dessertRecipes.map((recipe) => (
                <div className="lg:flex">
                  <Card key={recipe.id} styles={"md:w-[300px] lg:w-[400px]"}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-screen"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl pl-5 font-semibold">
              Recipe unavailable at the moment try again later
            </p>
          )}
        </div>
      </div>

      {/* Beverage recipe */}
      <div className="relative">
        <h1 className="mt-10 text-[1.6em] text-col pl-5">Beverage Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth mt-5 overflow-hidden rounded-xl md:mx-3">
          {beverageRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex gap-4 pl-4 overflow-hidden md:w-screen">
              {beverageRecipes.map((recipe) => (
                <div className="lg:flex">
                  <Card key={recipe.id} styles={"md:w-[300px] lg:w-[400px]"}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-screen"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl pl-5 font-semibold">
              Recipe unavailable at the moment try again later
            </p>
          )}
        </div>
      </div>

      {/* Vegetable recipe */}
      <div className="relative">
        <h1 className="mt-10 text-[1.6em] text-col pl-5">vegetable Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth mt-5 overflow-hidden rounded-xl md:mx-3">
          {vegetableRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-4 gap-4 overflow-hidden md:w-screen">
              {vegetableRecipes.map((recipe) => (
                <div className="">
                  <Card key={recipe.id} styles={"md:w-[300px] lg:w-[400px]"}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-screen"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          styles={"mb-10 bg-btn w-[160px]"}
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl pl-5 font-semibold">
              Recipe unavailable at the moment try again later
            </p>
          )}
        </div>
      </div>

      {/* <div className="mt-20">
        <h1 className="text-center">
          Are you curious on what to prepare in a day? Check out this
          recommendations
        </h1>
        <div className="relative">
          <h1 className="mt-5 text-4xl pl-5">
            BreakFast Recommendation Recipes
          </h1>
          <div className="overflow-x-scroll scroll-smooth overflow-hidden">
            {breakfastRecipes.length > 0 ? (
              <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
                {breakfastRecipes.map((recipe) => (
                  <div className="w-[500px] mr-10">
                    <Card key={recipe.id}>
                      <div className="text-center ml-2 ">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="rounded-xl recipe-images"
                        />
                        <div className="w-[350px] ml-9">
                          <h1 className="text-2xl mt-2">{recipe.title}</h1>
                          <p className="text-xl font-medium mt-3">
                            Delicious recipe that you would love to try.
                          </p>
                          <div className="mt-5 ml-[-20px] w-[400px] h-[50px] text-center">
                            <Link href={`/recipe/${recipe.id}`}>
                              <Button>See Full Details</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xl pl-5 font-semibold">
                Recipe unavailable at the moment try again later
              </p>
            )}
          </div>
        </div>

        <div className="relative">
          <h1 className="mt-5 text-4xl pl-5">Lunch Recommendation Recipes</h1>
          <div className="overflow-x-scroll scroll-smooth overflow-hidden">
            {LunchRecipes.length > 0 ? (
              <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
                {LunchRecipes.map((recipe) => (
                  <div className="w-[500px] mr-10">
                    <Card key={recipe.id}>
                      <div className="text-center ml-2 ">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="rounded-xl recipe-images"
                        />
                        <div className="w-[350px] ml-9">
                          <h1 className="text-2xl mt-2">{recipe.title}</h1>
                          <p className="text-xl font-medium mt-3">
                            Delicious recipe that you would love to try.
                          </p>
                          <div className="mt-5 ml-[-20px] w-[400px] h-[50px] text-center">
                            <Link href={`/recipe/${recipe.id}`}>
                              <Button>See Full Details</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xl pl-5 font-semibold">
                Recipe unavailable at the moment try again later
              </p>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}
