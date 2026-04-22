import React from 'react'
import { FiBookmark } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useRecipeBox } from '../context/RecipeBoxContext'

export default function RecipeCard({ recipe }) {
  const { savedRecipes, saveRecipe, removeRecipe } = useRecipeBox()
  const saved = savedRecipes.includes(recipe.id)

  function toggleSave(e) {
    e.stopPropagation()
    if (saved) removeRecipe(recipe.id)
    else saveRecipe(recipe.id)
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 10px 24px rgba(26,26,46,0.08)' }}
      className="bg-white rounded-lg overflow-hidden"
    >
      <div className="relative">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
        <button
          onClick={toggleSave}
          className="absolute top-2 right-2 bg-white border border-pink-200 rounded-full p-2"
          aria-label="Save"
        >
          <FiBookmark className={`text-pink-500 ${saved ? 'scale-110' : ''}`} />
        </button>
      </div>
      <div className="p-3 text-left">
        <h3 className="font-semibold text-gray-900">{recipe.title}</h3>
        <div className="text-pink-500 text-sm mt-2">{recipe.cookTime}</div>
      </div>
    </motion.article>
  )
}
