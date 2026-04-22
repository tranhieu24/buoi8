import React from 'react'
import subscribeImg from '../assets/Lotus delight salad.png'
import { motion } from 'framer-motion'

export default function SubscribePage() {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h1 className="font-heading text-4xl text-pink-600">Join Premium</h1>
        <p className="mt-2 text-gray-700 text-lg">Join now to access effortless, hassle-free recipes</p>
        <div className="mt-6 bg-white p-6 rounded-lg border border-pink-200">
          <div className="text-sm text-gray-600 font-medium">Monthly Price</div>
          <div className="text-3xl font-bold text-pink-600 mt-1">$0.25 USD</div>
          <div className="text-sm text-gray-500">Billed as $1 every 4 weeks</div>
          <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition">Subscribe Now</button>
          <button className="block w-full mt-2 text-sm text-pink-600 font-medium hover:underline">Cancel or Pause anytime</button>
        </div>

        <h3 className="mt-8 font-semibold text-lg">An All Access subscription includes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {['Cooking Guides', 'Wirecutter', 'Games', 'The Athletic'].map((item) => (
            <div key={item} className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <p className="font-medium text-gray-900">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white p-5 rounded-lg border border-gray-200">
          <div className="font-semibold text-gray-900 mb-3">Premium-only plan</div>
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-2 cursor-pointer hover:bg-gray-50"><input type="radio" name="plan" defaultChecked /> <span className="font-medium">$2/month</span></label>
          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"><input type="radio" name="plan" /> <span className="font-medium">$20/year <span className="text-pink-600">(Save $4!)</span></span></label>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <img src={subscribeImg} alt="food" className="rounded-lg object-cover w-full h-96 shadow-lg" />
      </motion.div>
    </div>
  )
}
