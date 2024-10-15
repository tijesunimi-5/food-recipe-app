"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CollectionCard from "@/components/CollectionCard";
import axios from "axios";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [snackRecipes, setSnackRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const apiKey = "24e8c8d91c2a4e57b44c61208f8055e0";
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [messsage, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: enteredEmail, message: enteredMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      const data = await response.json();
      setMessage("Review submitted successfully.");
      console.log(data);

      //Clear the input fields
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage("Failed to send message. Please try again later.");
    }
  };

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
      if (results && results.length > 0) {
        setRecipes(results);
      } else {
        console.error("No recipe found");
      }
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

      <div className="mt-64 bg-[#FFFCF5] text-center w-[510px] ">
        <h1 className="text-center text-[1.8em] font-bold pt-10">
          Popular Recipes You Can't Miss
        </h1>
        <p className="w-[490px] ml-2 font-medium text-xl">
          From comfort food classics to exotic flavors, our featured recipes are
          sure to impress.
        </p>

        <div className="text-center mt-10 pb-10">
          {recipes.length > 0 ? (
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
          ) : (
            <p>Recipe temporarily unavailable. try again later</p>
          )}
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
              <p className="mt-3 text-xl">
                No Cuisine recipes available. (site may have be down temporarily
                try again later.)
              </p>
            )}

            <div className="w-[200px] ml-40 mt-10 h-[40px]">
              <Link href={"/recipe"}>
                <Button>See More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-[#F2F2F2] w-[510px]">
        <div className="w-[450px] text-center ml-7 py-4">
          <h1>Learn More About Us</h1>
          <p className="text-xl mt-4">
            Discover new recipes and cooking techniques with our diverse
            selection of cuisine types.
          </p>
          <div className="w-[150px] h-[40px] ml-40 mt-4">
            <Link href={"/about-us"}>
              <Button>Learn About Us</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[510px] overflow-hidden mt-20 bg-[#FFFCF5]">
        <div className="w-[490px] text-center ml-2 py-6">
          <h1 className="text-2xl">Recipe Collection</h1>
          <p className="text-xl">
            From quick weeknight dinners to elaborate weekend projects, we have
            recipes to fit every lifestyle and taste
          </p>

          <div className="w-full text-center  overflow-x-scroll scroll-smooth">
            <div className=" w-[840px]  ml-5 mr-7  mt-5 ">
              <div className="w-[850px] flex gap-9">
                <div className="w-[390px] ">
                  <CollectionCard>
                    <div className="px-5">
                      <img
                        src="/food3.jpg"
                        className="recipe-image-collection  rounded-xl"
                      />
                      <h1 className="mt-4">Fried Chicken</h1>
                      <p className="text-xl pt-3">
                        This easy and flavorful dish features juicy chicken
                        thighs and tender asparagus roasted to perfection.{" "}
                      </p>

                      <hr className="w-[310px] ml-4 h-[2px] mt-10 bg-orange-500" />
                      <ul className="flex justify-between w-[290px] mt-3 text-xl font-semibold list-disc ml-10">
                        <li>30 Min</li>
                        <li>Easy</li>
                        <li>4.5 Ratings</li>
                      </ul>
                    </div>
                  </CollectionCard>
                </div>

                <div className="w-[390px]">
                  <CollectionCard>
                    <div className="px-5">
                      <img
                        src="/food1.jpg"
                        className="recipe-image-collection  rounded-xl"
                      />
                      <h1 className="mt-4"> Hamburger</h1>
                      <p className="text-xl pt-3">
                        This fresh Hamburger and fresh sweet potatoe fries is
                        well prepared with fresh ingredients
                      </p>

                      <hr className="w-[310px] ml-4 h-[2px] mt-10 bg-orange-500" />
                      <ul className="flex justify-between w-[290px] mt-3 text-xl font-semibold list-disc ml-10">
                        <li>30 Min</li>
                        <li>Easy</li>
                        <li>4.5 Ratings</li>
                      </ul>
                    </div>
                  </CollectionCard>
                </div>
              </div>
            </div>
          </div>
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
              ref={emailInputRef}
            />
            <textarea
              rows={3}
              ref={messageInputRef}
              className="border-2 border-orange-500 text-2xl pl-2 mt-5 rounded-lg w-[350px]"
            />

            <div className="w-[150px] mt-5 ml-44 h-[40px]">
              <Button onClick={sendMessage}>Send</Button>
            </div>
            <div className="w-[250px] h-[40px] ml-32 mt-10">
              <Link href={"/register/newsletter"}>
                <Button>Subcribe to our newsletter</Button>
              </Link>
            </div>
            <p className="text-2xl text-center">{messsage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
