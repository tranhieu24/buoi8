import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FiSearch } from 'react-icons/fi'
import { GiChefToque } from 'react-icons/gi'

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
    <header className="sticky top-0 z-50 w-full border-b border-[#f2e5e8] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 md:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-chefify-pink text-white shadow-sm">
            <GiChefToque className="text-lg" />
          </span>
          <span className="text-xl font-bold tracking-tight text-chefify-pink">Chefify</span>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="mx-2 hidden flex-1 max-w-md md:block">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What would you like to cook?"
              className="w-full rounded-full border border-[#f0e5e7] bg-[#f8f6f7] py-2 pl-9 pr-4 text-sm text-[#4f4651] outline-none transition placeholder:text-[#b6aeb5] focus:border-chefify-pink focus:bg-white focus:ring-2 focus:ring-chefify-pink/20"
            />
          </div>
        </form>

        {/* Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          <Link to="#" className="text-sm text-[#6b6170] transition hover:text-chefify-pink">What to cook</Link>
          <Link to="#" className="text-sm text-[#6b6170] transition hover:text-chefify-pink">Recipes</Link>
          <Link to="#" className="text-sm text-[#6b6170] transition hover:text-chefify-pink">Ingredients</Link>
          <Link to="#" className="text-sm text-[#6b6170] transition hover:text-chefify-pink">Occasions</Link>
          <Link to="#" className="text-sm text-[#6b6170] transition hover:text-chefify-pink">About Us</Link>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => login('demo@chefify.com')}
                className="rounded-full px-3 py-2 text-sm font-medium text-[#f0326a] transition hover:bg-[#fff1f4]"
              >
                Login
              </button>
              <Link
                to="/subscribe"
                className="rounded-full bg-chefify-pink px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#e62d64]"
              >
                Subscribe
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/recipe-box"
                className="rounded-full border border-chefify-pink px-4 py-2 text-sm font-medium text-chefify-pink transition hover:bg-[#fff1f4]"
              >
                Your Recipe Box
              </Link>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffe7ee] font-bold text-chefify-pink">
                {user?.name?.[0] ?? 'U'}
              </div>
            </>
          )}
        </nav>

      </div>
    </header>
  )
}