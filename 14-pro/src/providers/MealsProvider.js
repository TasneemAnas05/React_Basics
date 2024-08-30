import React from 'react';
import { useState } from 'react';
const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans" , "Baked Sweet Potatoes" , "Baked Potatoes"];

const MealsProvider = ({childern}) => {

    const [meals , setMealsList] = React.useState(todaysMeals);

    return(
        <MealsContext.Provider value={{meals}} >
            {childern}
        </MealsContext.Provider>
    )
    
}
export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;