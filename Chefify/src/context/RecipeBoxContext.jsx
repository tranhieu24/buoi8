import React, { createContext, useState, useContext } from 'react'

const RecipeBoxContext = createContext()

export function RecipeBoxProvider({ children }) {
  const [savedRecipes, setSavedRecipes] = useState([])

  function saveRecipe(id) {
    setSavedRecipes((s) => (s.includes(id) ? s : [...s, id]))
  }

  function removeRecipe(id) {
    setSavedRecipes((s) => s.filter((x) => x !== id))
  }

  return (
    <RecipeBoxContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe }}>
      {children}
    </RecipeBoxContext.Provider>
  )
}

export function useRecipeBox() {
  return useContext(RecipeBoxContext)
}
