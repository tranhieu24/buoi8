import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useRecipeBox } from '../context/RecipeBoxContext'
import mockRecipes from '../data/mockRecipes'
import RecipeCard from '../components/RecipeCard'

export default function RecipeBoxPage() {
  const { user } = useAuth()
  const { savedRecipes } = useRecipeBox()
  const saved = mockRecipes.filter((r) => savedRecipes.includes(r.id))

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">{user?.name?.[0] ?? 'U'}</div>
        <div>
          <div className="font-semibold">{user?.name ?? 'Guest'}</div>
          <div className="text-sm text-gray-500">1,234 subscribers</div>
        </div>
        <div className="ml-auto">
          <button className="px-3 py-2 bg-pink-600 text-white rounded">Share</button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-3">
          <button className="px-3 py-1 bg-pink-50 rounded">Saved Recipes</button>
          <button className="px-3 py-1">Folders</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {saved.length ? saved.map((r) => <RecipeCard key={r.id} recipe={r} />) : <div className="text-gray-500">No saved recipes yet.</div>}
        </div>
      </div>
    </div>
  )
}
