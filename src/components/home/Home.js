import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import axios from "axios";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snaack", "Teatime"];
const APP_ID = "4e9f05eb";
const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

const Home = () => {
  const [query, setQuery] = useState("apple");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (result.status === 200) {
        setRecipes(result.data.hits);
      } else {
        alert("Please fill the form");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
};

export default Home;
