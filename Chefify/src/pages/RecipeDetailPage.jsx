import React from 'react'
import { useParams, Link } from 'react-router-dom'
import mockRecipes from '../data/mockRecipes'
import { motion } from 'framer-motion'

export default function RecipeDetailPage() {
  const { id } = useParams()
  const recipe = mockRecipes.find((r) => r.id === id) || mockRecipes[0]

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-pink-600">Home</Link> &gt; <span>Cooking guides</span>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="font-heading text-4xl text-pink-600 mt-2">{recipe.title}</h1>
            <div className="flex items-center gap-4 mt-4">
              <img src={recipe.authorAvatar} className="w-12 h-12 rounded-full object-cover" alt={recipe.author} />
              <div>
                <div className="font-medium text-gray-900">{recipe.author}</div>
                <div className="text-sm text-gray-500">{recipe.rating} ★ • {recipe.cookTime}</div>
              </div>
            </div>

            <img src={recipe.image} className="w-full h-96 object-cover rounded-lg mt-6" alt={recipe.title} />

            <h3 className="mt-8 font-semibold text-lg text-gray-900">Ingredients</h3>
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
              {recipe.ingredients.map((ing, i) => <li key={i} className="text-sm">{ing}</li>)}
            </ul>

            <button className="mt-6 bg-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition">Add to Grocery List</button>

            <h3 className="mt-8 font-semibold text-lg text-gray-900">Reviews</h3>
            <div className="mt-4 space-y-4">
              {recipe.reviews.length ? recipe.reviews.map((rv) => (
                <div key={rv.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-200" />
                    <div>
                      <div className="font-medium text-gray-900">{rv.name}</div>
                      <div className="text-xs text-gray-500">{rv.date}</div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{rv.text}</p>
                </div>
              )) : <p className="text-gray-500">No reviews yet. Be the first to review!</p>}
            </div>
          </div>

          <aside className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg text-gray-900">Cooking Steps</h4>
            <div className="mt-4 space-y-4">
              {recipe.steps.map((s) => (
                <div key={s.step} className="">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm font-bold">{s.step}</div>
                    <div className="font-medium text-gray-900">Step {s.step}</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-2 ml-11">{s.text}</p>
                  {s.image && <img src={s.image} alt={`step ${s.step}`} className="mt-2 rounded w-full h-32 object-cover ml-11" />}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <label className="block text-sm font-medium text-gray-900">Add Cooking Note</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" rows="3" placeholder="Share your experience..." />
              <button className="mt-2 w-full bg-pink-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-pink-700 transition">Send</button>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  )
}
