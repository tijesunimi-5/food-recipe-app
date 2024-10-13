import CollectionCard from "@/components/CollectionCard";
import React from "react";

const page = () => {
  return (
    <div className="w-[510px]">
      <div className="mt-20 pl-2">
        <h1>
          Welcome to <span>Tasty-</span>Cook! Your ultimate cooking companion.
          Explore, cook, and share delicious recipes with our vibrant community.
        </h1>

        <p className=" mt-5 text-xl font-semibold">
          Tasty-Cook is a comprehensive food recipe platform connecting home
          cooks, food enthusiasts, and professional chefs. Our mission is to
          make cooking easy ,enjoyable, and social.
        </p>

        <h1 className="mt-10 text-3xl">Features</h1>
        <ul className="flex flex-col w-[460px] list-disc ml-5 mt-3 text-xl font-medium">
          <li className="">
            Explore 100,000+ recipes with filters (cuisine, dietary needs,
            cooking time).
          </li>
          <li>Search by ingredient, dish name, or keyword</li>
          <li>Create and manage grocery lists</li>
          <li>Share recipes on social media</li>
          <li>Follow fellow Cooks and chefs</li>
          <li>Step-by-step cooking guides</li>
          <li>Nutritional information and serving sizes</li>
        </ul>

        <h1 className="mt-10 text-3xl">Benefits</h1>
        <ul className="flex flex-col w-[460px] list-disc ml-5 mt-3 text-xl font-medium">
          <li>Discover new recipes and cooking techniques</li>
          <li>Streamline meal planning andgrocery shopping</li>
          <li>Connecct with fellow food enthusiasts</li>
          <li>Improve cooking skills and confidence</li>
          <li>Access nutritional information and healthy options</li>
        </ul>

        <div className="w-full text-center mt-20 bg-[#FFFCF5] py-5 ">
          <h1>Testimonials</h1>
          <div className="  overflow-hidden overflow-x-scroll">
            <div>
              <div className="w-[950px] ml-10 mt-6 flex justify-between ">
                <div className="mr-10">
                  <CollectionCard>
                    <div className="py-10 w-[330px]">
                      <h1 className="w-[300px] ml-4">
                        Tasty-Cook has transformed my cooking routine!
                      </h1>

                      <p className="text-xl font-semibold">~Emily R.</p>
                    </div>
                  </CollectionCard>
                </div>

                <div className="mr-10">
                  <CollectionCard>
                    <div className="py-10 w-[330px]">
                      <h1 className="w-[300px] ml-5">
                        I've found so many delicious and easy recipes!
                      </h1>

                      <p className="text-xl font-semibold">~Mary K.</p>
                    </div>
                  </CollectionCard>
                </div>

                <div>
                  <CollectionCard>
                    <div className="py-10 w-[330px]">
                      <h1 className="w-[300px] ml-5">
                        Love the community support and inspiration!
                      </h1>

                      <p className="text-xl font-semibold">~Sarah T.</p>
                    </div>
                  </CollectionCard>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mt-10 font-bold text-3xl">Call to action</h1>
          <p className="text-xl font-semibold mt-5">
            Send developer some funds.{" "}
            <a className="underline decoration-orange-500" href="/">
              Click here
            </a>{" "}
            to support
          </p>

          <div className="flex flex-col">
            <h1 className="text-3xl mt-7">Contact Me</h1>
            <span className="text-xl font-semibold">Email: tijesunimiidowu16@gmail.com</span>
            <span className="text-xl font-semibold">Phone number: 07018268171</span>
            <span className="text-xl font-semibold">Hot-line: 09152282614</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
