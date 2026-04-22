import React from 'react'
import { motion } from 'framer-motion'

export default function LoginModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} className="bg-white rounded-lg w-full max-w-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="hidden md:block bg-cover rounded" style={{ backgroundImage: `url('/src/assets/hero.png')` }}>
          <div className="p-6 text-white">“Good food brings people together.”</div>
        </div>
        <div>
          <button className="ml-auto" onClick={onClose}>✕</button>
          <h3 className="text-2xl font-semibold">Enter your email to log in</h3>
          <input className="w-full border rounded p-2 mt-3" placeholder="you@domain.com" />
          <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded">Continue</button>
          <div className="flex items-center gap-3 mt-3">
            <button className="flex-1 border rounded py-2">G Continue with Google</button>
            <button className="flex-1 border rounded py-2">f Continue with Facebook</button>
          </div>
          <p className="text-xs text-gray-500 mt-3">By continuing you agree to our Terms.</p>
        </div>
      </motion.div>
    </div>
  )
}
