"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import axios from "axios";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [snackRecipes, setSnackRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const apiKey = "5c349d02cf7942cc9940532aafafcad1";

  const fetchSnackRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=cuisine&number=1`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      if (results && results.length > 0) {
        setSnackRecipes(results);
      } else {
        console.error("No snack recipes found.");
      }
    } catch (error) {
      console.error("Error fetching snack recipes:", error);
    }
  };

  const fetchRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=4`;

    try {
      const response = await axios.get(url);

      const { results } = response.data;
      setRecipes(results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    fetchSnackRecipes();
  }, []);

  const handleSearch = () => {
    fetchRecipes();
  };

  return (
    <div className="">
      <div className="heropage mt-12 w-[510px] z-20 relative">
        <div className="mobile-background">
          <img src="/food1.jpg" />
        </div>
        <div className="overlay"></div>
        <div className="relative text-center">
          <h1 className="z-40 text-4xl text-white pt-20">
            Cook Like a Pro With Our <span>Easy</span> and <span>Tasty</span>{" "}
            Recipes
          </h1>
        </div>
      </div>

      <div className="mt-64 bg-[#FFFCF5] text-center w-[510px]">
        <h1 className="text-center text-[1.8em] font-bold pt-10">
          Popular Recipes You Can't Miss
        </h1>
        <p className="w-[490px] ml-2 font-medium text-xl">
          From comfort food classics to exotic flavors, our featured recipes are
          sure to impress.
        </p>

        <div className="text-center mt-10 pb-10">
          <div className="text-center mt-10 pb-10 ml-8 ">
            {recipes.map((recipe) => (
              <div className="mt-8">
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
        </div>
      </div>

      <div className="w-[510px] text-center mt-20">
        <h1 className="text-4xl font-bold">Explore by Cuisine Type</h1>
        <p className="text-xl font-medium w-[400px] ml-14 mt-5">
          Discover new flavor and cooking techniques with our diverse selection
          of cuisine types.
        </p>

        <div className="relative">
          <div className="relative">
            {snackRecipes.length > 0 ? (
              <div className="flex flex-col w-[510px] pl-14 relative">
                {snackRecipes.map((recipe) => (
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
                ))}
              </div>
            ) : (
              <p className="text-red-400 text-xl">No Cuisine recipes available. (Check internet connection)</p>
            )}

            <div className="w-[200px] ml-40 mt-10 h-[40px]">
              <Link href={"/recipe/snack"}>
                <Button>See More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
