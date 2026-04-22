import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FiSearch } from 'react-icons/fi'
import logoImg from '../assets/avatar_small.png'

export default function Navbar() {
  const { user, isLoggedIn, login } = useAuth()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`)
      setSearchTerm('')
    }
  }

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logoImg}
            alt="Chefify"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-pink-600">Chefify</span>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-6">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes, ingredients..."
              className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </form>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="#" className="text-gray-600 hover:text-pink-600 transition">What to cook</Link>
          <Link to="#" className="text-gray-600 hover:text-pink-600 transition">Recipes</Link>
          <Link to="#" className="text-gray-600 hover:text-pink-600 transition">Ingredients</Link>
          <Link to="#" className="text-gray-600 hover:text-pink-600 transition">Occasions</Link>
          <Link to="#" className="text-gray-600 hover:text-pink-600 transition">About Us</Link>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => login('demo@chefify.com')}
                className="text-pink-600 font-medium hover:text-pink-700 transition"
              >
                Login
              </button>
              <Link
                to="/subscribe"
                className="bg-pink-600 text-white px-4 py-2 rounded-md font-medium hover:bg-pink-700 transition"
              >
                Subscribe
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/recipe-box"
                className="px-4 py-2 border border-pink-600 text-pink-600 rounded-md font-medium hover:bg-pink-50 transition"
              >
                Your Recipe Box
              </Link>
              <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                {user?.name?.[0] ?? 'U'}
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}