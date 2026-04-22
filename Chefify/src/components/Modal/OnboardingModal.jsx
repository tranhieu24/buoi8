import React from 'react'
import { motion } from 'framer-motion'

export default function OnboardingModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} className="bg-white rounded-lg w-full max-w-md p-6">
        <button className="ml-auto" onClick={onClose}>✕</button>
        <h2 className="text-pink-600 font-semibold text-xl">Discover the app</h2>
        <p className="text-sm text-gray-700 mt-2">Find curated recipes and save your favorites.</p>
        <div className="mt-4 h-40 bg-gray-100 rounded" />
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">Next</button>
        <button className="mt-2 w-full text-pink-600">Skip</button>
      </motion.div>
    </div>
  )
}
