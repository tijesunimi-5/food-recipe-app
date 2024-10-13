"use client"
import Button from "@/components/Button";
import Card from "@/components/Card";
import React, { useState, useEffect } from "react";

const page = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const apiKey = "24e8c8d91c2a4e57b44c61208f8055e0";

  const fetchRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=cuisine&number=4`;

    try {
      const response = await axios.get(url);

      const { results } = response.data;
      if (results && results.length > 0) {
        setRecipes(results);
      } else {
        console.error("No snack recipes found.");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  
  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = () => {
    fetchRecipes();
    console.log('working')
  };


  return (
    <div className="w-[510px] ">
      <div className="mt-20">
        <div className="pl-7 py-2  text-black relative w-[479px]">
          <label
            htmlFor="email"
            className="absolute px-2 text-2xl font-semibold"
          >
            Search:{" "}
          </label>
          <input
            type="email"
            id="email"
            className="border-2 relative w-[450px] rounded-lg bg-transparent backdrop:blur-3xl border-orange-500 pl-24  text-2xl"
          />
          <div className="w-[100px] h-[35px] absolute right-0 top-2">
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>

        <div className="relative">
          <h1 className="mt-10 text-3xl pl-5">Cuisine</h1>
          <div className="relative overflow-x-scroll scroll-smooth">
            {recipes.length > 0 ? (
              <div className="flex w-[510px] pl-14 relative">
                {recipes.map((recipe) => (
                  <Card key={recipe.id}>
                    <div
                      key={recipe.id}
                      className="text-center shadow-md bg-white rounded-xl w-[400px] mt-9 relative"
                    >
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-xl h-64 object-cover snack-recipe"
                        key={recipe.id}
                      />
                      <div className="snack-title-overlay rounded-xl">
                        {recipe.title}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-red-400 text-xl">
                No Cuisine recipes available. (Check internet connection)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
