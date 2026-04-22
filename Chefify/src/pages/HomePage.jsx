import React from 'react'
import RecipeCard from '../components/RecipeCard'
import mockRecipes from '../data/mockRecipes'
import { motion } from 'framer-motion'
import heroImg from '../assets/Lotus delight salad.png'
import avatarImg from '../assets/avatar_small.png'
import { FiArrowRight } from 'react-icons/fi'

export default function HomePage() {
  const heroRecipe = mockRecipes[5]

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-4 md:px-6 md:py-6">
      <section className="relative overflow-hidden rounded-[28px] border border-[#f1e2e5] bg-[#fff8f6] shadow-[0_24px_80px_rgba(240,50,106,0.12)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative min-h-[540px] md:min-h-[640px]"
        >
          <img
            src={heroImg}
            alt="Fresh salad on a clean plate"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,252,250,0.94)_0%,rgba(255,252,250,0.84)_24%,rgba(255,252,250,0.22)_48%,rgba(255,252,250,0)_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_36%)]" />

          <div className="absolute left-4 top-1/2 w-[280px] -translate-y-1/2 md:left-10 md:w-[330px]">
            <div className="relative rounded-[18px] border border-[#f2d8dc] bg-white/95 px-6 pb-6 pt-7 text-center shadow-[0_22px_60px_rgba(25,18,18,0.10)] backdrop-blur-sm">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#f8c031] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
                Recipe of the day
              </div>

              <h2 className="font-heading text-[26px] leading-tight text-chefify-pink md:text-[28px]">
                {heroRecipe.title}
              </h2>
              <p className="mt-4 text-[13px] leading-6 text-[#6f6470]">
                Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
              </p>

              <div className="mt-8 flex flex-col items-center gap-2">
                <img
                  src={avatarImg}
                  alt="Chef profile"
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <div className="text-sm font-medium text-[#5d5562]">Salad Caprese</div>
              </div>

              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-chefify-pink px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(240,50,106,0.26)] transition hover:-translate-y-0.5 hover:bg-[#e62d64]">
                View now
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="absolute right-4 top-4 hidden rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-[#756b78] shadow-sm backdrop-blur-sm md:block">
            Seasonal picks curated for you
          </div>
        </motion.div>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#241d28]">This Summer Recipes</h2>
            <p className="mt-1 text-sm text-[#7b6f79]">Fresh ideas for warm days and easy dinners.</p>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {mockRecipes.slice(0,4).map((r) => (
            <div key={r.id} className="w-72 flex-shrink-0">
              <RecipeCard recipe={r} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[#241d28]">Recipes With Videos</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {mockRecipes.slice(4,8).map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      <section className="mt-10 pb-4">
        <h2 className="mb-4 text-2xl font-semibold text-[#241d28]">Editor's Pick</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mockRecipes.slice(8,10).map((r) => (
            <div key={r.id} className="flex items-center gap-4 rounded-2xl border border-[#f1e6e9] bg-white p-4 shadow-[0_10px_30px_rgba(25,18,18,0.05)]">
              <img src={r.image} className="h-28 w-40 rounded-xl object-cover" alt={r.title} />
              <div className="text-left">
                <h3 className="font-semibold text-[#241d28]">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#7b6f79]">A chef favorite for gatherings.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
