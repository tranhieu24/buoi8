import React from 'react'
import mockRecipes from '../data/mockRecipes'
import RecipeCard from '../components/RecipeCard'
import { useSearchParams } from 'react-router-dom'

export default function SearchResultsPage() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const results = mockRecipes.filter((r) => r.title.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 bg-white p-4 rounded-lg">
        <h3 className="font-semibold">Filters</h3>
        <div className="mt-3 text-sm text-gray-600">
          <div className="font-medium">Type</div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {['Pan-fried','Stir-fried','Grilled','Roasted','Sautéed','Baked','Steamed','Stewed'].map((t) => (
              <label key={t} className="inline-flex items-center gap-2"><input type="checkbox" defaultChecked={t==='Grilled' || t==='Roasted'} />{t}</label>
            ))}
          </div>

          <div className="mt-4">
            <div className="font-medium">Time (min)</div>
            <input type="range" min="30" max="50" defaultValue="40" className="w-full accent-pink-600" />
          </div>

          <div className="mt-4">
            <div className="font-medium">Rating</div>
            <div className="space-y-1 mt-2">
              {[5,4,3,2,1].map((s) => (
                <label key={s} className="inline-flex items-center gap-2"><input type="checkbox" />{s}★</label>
              ))}
            </div>
          </div>

          <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-md">Apply</button>
        </div>
      </aside>

      <main className="md:col-span-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl">{q || 'All Recipes'} ({results.length})</h2>
          <div>
            <select className="border rounded-md p-2">
              <option>A–Z</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="text-center mt-12">
            <div className="text-pink-600 text-4xl">🔍</div>
            <h3 className="mt-4 font-semibold">Sorry, no results found for "{q}"</h3>
            <div className="mt-3">Try searching for: <span className="text-pink-600">Sweet Cake</span>, <span className="text-pink-600">Black Cake</span></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {results.map((r) => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-6 text-sm">
          <button className="px-3 py-1">&lt;</button>
          <div className="px-3 py-1 bg-pink-50 rounded">1</div>
          <button className="px-3 py-1">2</button>
          <button className="px-3 py-1">3</button>
          <div className="px-3 py-1">...</div>
          <button className="px-3 py-1">11</button>
          <button className="px-3 py-1">&gt;</button>
        </div>
      </main>
    </div>
  )
}
