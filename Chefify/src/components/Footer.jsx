import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/avatar_small.png'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white mt-10">
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoImg} alt="Chefify" className="w-12 h-12 object-contain flex-shrink-0" />
          </div>
          <p className="text-sm text-gray-300 mt-2">Curated recipes for every occasion.</p>
          <div className="mt-4 flex">
            <input className="rounded-l-md p-2 text-sm text-gray-900" placeholder="Your email" />
            <button className="bg-pink-500 px-4 rounded-r-md">Send</button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Learn More</h3>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li><Link to="#">How it works</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Recipes</h3>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li><Link to="#">Popular</Link></li>
            <li><Link to="#">New</Link></li>
            <li><Link to="#">Collections</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-300 px-8">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Chefify" className="w-12 h-12 object-contain flex-shrink-0" />
            <div className="truncate">© 2023 Company</div>
          </div>
          <div className="flex gap-4">
            <Link to="#">Terms</Link>
            <Link to="#">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}