import React from 'react'
import RecipeCard from '../components/RecipeCard'
import mockRecipes from '../data/mockRecipes'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

export default function HomePage() {
  const heroRecipe = mockRecipes[0]

  return (
    <main className="max-w-7xl mx-auto p-6">
      <section className="relative bg-gray-50 rounded-lg overflow-hidden p-6">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="col-span-2">
            <h1 className="font-heading text-4xl text-pink-600">Find your next favorite recipe</h1>
            <p className="mt-3 text-gray-700">Discover seasonal picks and expert guides to make cooking simple and fun.</p>
          </div>
          <div className="">
            <img src={heroImg} alt="hero" className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-sm text-pink-600 font-semibold">Recipe of the Day</div>
              <h3 className="font-semibold text-lg mt-2">{heroRecipe.title}</h3>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition">View now →</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold text-2xl mb-4">This Summer Recipes</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {mockRecipes.slice(0,4).map((r) => (
            <div key={r.id} className="w-72 flex-shrink-0">
              <RecipeCard recipe={r} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold text-2xl mb-4">Recipes With Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {mockRecipes.slice(4,8).map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold text-2xl mb-4">Editor's Pick</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockRecipes.slice(8,10).map((r) => (
            <div key={r.id} className="flex gap-4 items-center bg-white rounded-lg p-4">
              <img src={r.image} className="w-40 h-28 object-cover rounded" alt="" />
              <div className="text-left">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="text-sm text-gray-600">A chef favorite for gatherings.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
