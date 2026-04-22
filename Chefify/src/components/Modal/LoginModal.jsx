import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../../assets/Lotus delight salad.png'

export default function LoginModal({ open, onClose }) {
  if (!open) return null
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        className="bg-white rounded-lg w-full max-w-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image Section */}
        <div className="hidden md:block bg-cover rounded-lg overflow-hidden relative">
          <img src={heroImg} alt="Login" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
            <p className="text-white text-lg font-semibold">"Good food brings people together."</p>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <button 
            className="ml-auto block text-gray-500 hover:text-gray-700 text-2xl" 
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="text-2xl font-semibold mt-2">Enter your email to log in</h3>
          <input 
            className="w-full border border-gray-300 rounded p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-pink-500" 
            placeholder="you@domain.com" 
          />
          <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded font-medium hover:bg-pink-700 transition">
            Continue
          </button>
          <div className="flex items-center gap-3 mt-4">
            <button className="flex-1 border border-gray-300 rounded py-2 hover:bg-gray-50 transition">
              Google
            </button>
            <button className="flex-1 border border-gray-300 rounded py-2 hover:bg-gray-50 transition">
              Facebook
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">By continuing you agree to our Terms.</p>
        </div>
      </motion.div>
    </div>
  )
}
