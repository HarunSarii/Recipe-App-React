import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./headerStyle";

const Form = ({ setQuery, query, getData, mealTypes, meal, setMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    getData();
  };

  const handleChange = (e) => {
    setMeal(e.target.value);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button>Search</Button>
      <Select name="mealTypes" id="mealTypes">
        {mealTypes?.map((item) => {
          <option value={item.toLowerCase()} key={item}>
            {item}
          </option>;
        })}
      </Select>
    </FormContainer>
  );
};

export default Form;
