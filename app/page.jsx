"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CollectionCard from "@/components/CollectionCard";
import axios from "axios";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [snackRecipes, setSnackRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const apiKey = "bf861a0cc9fc42fdbca349c78b14ab56";
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [messsage, setMessage] = useState("");
  const router = useRouter();

  const sendMessage = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    if (!enteredEmail || !enteredMessage) {
      setMessage("Enter a valid input");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: enteredEmail, message: enteredMessage }),
      });

      console.log("Sending email:", enteredEmail);
      console.log("Sending message:", enteredMessage);

      const data = await response.json();
      setMessage("Review submitted successfully.");
      console.log(data);

      setTimeout(() => {
        setMessage("");
      }, 3000);

      //Clear the input fields
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage("Failed to send message. Please try again later.");
    }
  };

  const fetchSnackRecipes = async () => {
    const storedRecipes = localStorage.getItem("snackRecipes");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setSnackRecipes(parsedRecipes);
      return;
    }
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=cuisine&number=4`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;
      if (results && results.length > 0) {
        localStorage.setItem("snackRecipes", JSON.stringify(results));
        setSnackRecipes(results);
      } else {
        console.error("No snack recipes found.");
      }
    } catch (error) {
      console.error("Error fetching snack recipes:", error);
    }
  };

  const fetchRecipes = async () => {
    //check if recipes exist in localstorage
    const storedRecipes = localStorage.getItem("allRecipe");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setRecipes(parsedRecipes);
      return;
    }

    //If there's no recipe in localstorage, featch from API
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&query=${query}`;

    try {
      const response = await axios.get(url);

      const { results } = response.data;
      const allResult = response.data;
      if (results && results.length > 0) {
        setRecipes(results);
        localStorage.setItem("allRecipe", JSON.stringify(results));
      } else {
        console.error("No recipe found");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
    fetchSnackRecipes();
  }, []);

  useEffect(() => {
    gsap.to(".hero-content", {
      opacity: 1,
      duration: 2,
    });
  }, []);

  //to remove every html tag from spoonacular result
  const stripHtml = (html) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(html, "text/html");
    return dom.body.textContent || "";
  };

  return (
    <div className="whole overflow-x-hidden">
      {/* hero-section */}
      <div className="heropage mt-12 relative h-screen md:w-[768px] md:h-[70vh] flex flex-col items-center lg:w-screen xl:w-screen xl:h-screen">
        <div className="h-full w-full overflow-hidden md:h-[70vh] xl:h-screen">
          <img
            src="/food2.jpg"
            alt="background"
            className="relative h-full md:h-[70vh] md:w-screen xl:h-screen"
          />
        </div>
        <h1 className="absolute bottom-[190px] bg-overlay text-center text-white hero-content opacity-0 md:text-[30px]">
          Unlock new cooking skills with our recipe
        </h1>
      </div>

      {/* Recipes */}
      <div className=" bg-[#FFFCF5] text-center w-screen flex flex-col items-center md:w-[768px] lg:w-screen xl:w-[1500px]">
        <h1 className="text-center text-[1.3em] font-bold pt-10 md:text-4xl md:font-bold">
          Popular Recipes You Can't Miss
        </h1>

        <p className=" mx-2 font-medium text-[16px] md:text-[20px] md:font-semibold md:px-20 md:pt-5 lg:w-[800px] ">
          From comfort food classics to exotic flavors, our featured recipes are
          sure to impress.
        </p>

        <div className="text-center pb-10">
          {recipes.length > 0 ? (
            <div
              key={recipes.id}
              className="text-center flex flex-col gap-10 mt-10 pb-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
            >
              {recipes.map((recipe) => (
                <div key={recipe.id} className="lg:flex">
                  <Card key={recipe.id} styles={'md:w-[500px] lg:w-[400px]'}>
                    <div className="text-center">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="rounded-t-xl w-full"
                      />
                      <div className="px-3 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-[19px] mt-2 text-col">
                          {recipe.title}
                        </h1>
                        <p className="text-[16px] w-[280px] overflow-hidden md:w-[400px] text-start font-medium h-[70px] text-ellipsis">
                          {stripHtml(recipe.summary || "")}...
                        </p>

                        <Button
                          onClick={() => router.push(`/recipe/${recipe.id}`)}
                          styles={"mb-5 bg-btn"}
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
            <p>Recipe temporarily unavailable. try again later</p>
          )}
        </div>
      </div>

      {/* Cuisine section */}
      <div className="w-screen flex flex-col justify-center mt-5 md:w-screen lg:w-screen xl:w-screen">
        <div className="relative ml-3 md:px-20">
          <h1 className="text-[1.3em] font-bold text-col lg:text-[1.6em] lg:font-bold">
            Explore by Cuisine Type
          </h1>
          <p className="text-[16px] font-medium mt-2 lg:text-[19px] lg:w-[400px]">
            Discover new flavor and cooking techniques with our diverse
            selection of cuisine types.
          </p>
        </div>

        <div className="relative">
          <div className="relative flex flex-col justify-center items-center">
            {snackRecipes.length > 0 ? (
              <div
                key={snackRecipes.id}
                className="flex flex-col gap-4 mt-4 relative justify-center lg:grid lg:grid-cols-2 items-center xl:grid-cols-3"
              >
                {snackRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="text-center flex flex-col  items-center shadow-md rounded-xl relative md:w-[400px] md:mt-4 h-[380px]"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="rounded-t-xl h-64 w-full"
                      key={recipe.id}
                    />
                    <h1 className="mt-8 w-[220px] text-col">{recipe.title}</h1>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-xl">
                No Cuisine recipes available. (site may have be down temporarily
                try again later.)
              </p>
            )}

            <Button
              onClick={() => router.push(`/recipe`)}
              styles={"mt-5 bg-btn lg:mt-10"}
            >
              See more
            </Button>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="mt-20 bg-[#F2F2F2] w-full md:w-screen lg:w-screen">
        <div className="text-center flex flex-col items-center py-4">
          <h1 className="text-col font-bold text-[1.3em]">
            Learn More About Us
          </h1>
          <p className="text-[18px] mt-4 mx-4 md:w-[400px] md:font-semibold">
            Discover new recipes and cooking techniques with our diverse
            selection of cuisine types.
          </p>

          <Button
            onClick={() => router.push("/about-us")}
            styles={"bg-btn mt-10"}
          >
            About Us
          </Button>
        </div>
      </div>

      {/* <div className="w-[510px] overflow-hidden mt-20 bg-[#FFFCF5] md:ml-[120px] lg:ml-[220px] xl:ml-[250px] xl:w-[900px]">
        <div className="w-[490px] text-center ml-2 py-6 md:w-[500px] lg:w-[700px] xl:w-[900px]">
          <h1 className="text-2xl">Recipe Collection</h1>
          <p className="text-xl">
            From quick weeknight dinners to elaborate weekend projects, we have
            recipes to fit every lifestyle and taste
          </p>

          <div className="w-full text-center  overflow-x-scroll scroll-smooth ">
            <div className=" w-[840px]  ml-5 mr-7  mt-5 lg:w-[1000px]">
              <div className="w-[850px] flex gap-9 md:w-[990px] lg:w-[1000px]">
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
      </div> */}

      {/* Reviews */}
      <div className="w-screen flex flex-col mt-32 text-center md:w-[768px] bg-[#F2F2F2] lg:w-screen[1006px] xl:w-[1525px]">
        <div className="text-center flex flex-col py-4 md:w-[510px] md:ml-32 xl:ml-[500px]">
          <h1 className="text-[1.3em] text-col font-bold">Send Reviews</h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute px-2 text-[19px] mt-1 text-gray-500 font-semibold"
              >
                Email:{" "}
              </label>
              <input
                type="email"
                id="email"
                className="border-2 w-[350px] rounded-lg border-orange-500 pl-20  text-2xl"
                ref={emailInputRef}
              />
            </div>
            <textarea
              rows={3}
              ref={messageInputRef}
              className="border-2 border-orange-500 text-2xl pl-2 mt-5 rounded-lg w-[350px]"
              placeholder="Message"
            />

            <Button styles={"mt-2 shadow-xl border-btn"}>Send Message</Button>
            <Button styles={"mt-4 border-btn"}>
              Subcribe to our newsletter
            </Button>

            <p className="text-2xl text-center ">{messsage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
