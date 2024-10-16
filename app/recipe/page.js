"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

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

  const searchRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=10`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setSearch(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=35`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const snackRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=snack&number=15`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setCuisineRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  const cuisineRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=snack&number=15`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setSnackRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const dessertRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=desserts&number=15`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setDessertRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const beverageRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=beverages&number=15`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setBeverageRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

   const vegetableRecipe = async () => {
     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=vegetable&number=15`;

     try {
       const response = await axios.get(url);
       const { results } = response.data;
       setVegetableRecipes(results);
     } catch (error) {
       console.error("Error fetching recipes:", error);
     }
   };

   const breakfastRecipe = async () => {
     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=breakfast&number=15`;

     try {
       const response = await axios.get(url);
       const { results } = response.data;
       setBreakfastRecipes(results);
     } catch (error) {
       console.error("Error fetching recipes:", error);
     }
   };

   const lunchRecipe = async () => {
     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=lunch&number=15`;

     try {
       const response = await axios.get(url);
       const { results } = response.data;
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

  return (
    <div className="w-[510px] md:w-[768px] lg:w-[1006px] xl:w-[1525px]">
      <div className="mt-20">
        <div className="pl-7 py-2  text-black relative w-[479px] md:ml-32 lg:ml-60 xl:ml-[520px]">
          <label
            htmlFor="text"
            className="absolute px-2 text-2xl font-semibold"
          >
            Search:{" "}
          </label>
          <input
            type="text"
            id="text"
            value={query}
            className="border-2 relative w-[450px] rounded-lg bg-transparent backdrop:blur-3xl border-orange-500 pl-24  text-2xl"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="w-[100px] h-[35px] absolute right-0 top-2">
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-center mt-10 text-3xl font-bold">Search Result</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {search.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {search.map((recipe) => (
                <div className="w-[400px] mr-20">
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
            <p className="text-xl text-center font-semibold">No search</p>
          )}
        </div>
      </div>

      <div className="relative">
        <h1 className="mt-10 text-4xl pl-5">Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {recipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {recipes.map((recipe) => (
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
        <h1 className="mt-10 text-4xl pl-5">Cuisine Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {cuisineRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {cuisineRecipes.map((recipe) => (
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
        <h1 className="mt-10 text-4xl pl-5">Snack Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {snackRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {snackRecipes.map((recipe) => (
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
        <h1 className="mt-10 text-4xl pl-5">Dessert Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {dessertRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {dessertRecipes.map((recipe) => (
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
        <h1 className="mt-10 text-4xl pl-5">Beverage Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {beverageRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {beverageRecipes.map((recipe) => (
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
        <h1 className="mt-10 text-4xl pl-5">vegetable Recipes</h1>
        <div className="overflow-x-scroll scroll-smooth overflow-hidden">
          {vegetableRecipes.length > 0 ? (
            <div className="w-[500px] overflow-x-scroll flex pl-14 overflow-hidden">
              {vegetableRecipes.map((recipe) => (
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

      <div className="mt-20">
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
      </div>
    </div>
  );
}
