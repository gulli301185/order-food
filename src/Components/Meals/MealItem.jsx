import React from 'react'
import MealList from './MealList';

const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi-shusi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m4",
      name: "Barbecue Burger",
      description: "American , raw , meaty",
      price: 12.99,
    },
  ];

function MealItem() {

    const meals=DUMMY_MEALS.map((el)=>{
        return <MealList key={el.id} el={el}/>
    })
  return (
    <div>{meals}</div>
  )
}

export default MealItem