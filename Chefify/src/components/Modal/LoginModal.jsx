import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../../assets/Image 72.png'
import { FiX } from 'react-icons/fi'
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa'

export default function LoginModal({ open, onClose }) {
  if (!open) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-3 py-6">
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="grid w-full max-w-[980px] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="relative min-h-[520px] bg-[#8cc9d3]">
          <img src={heroImg} alt="Cooking scene" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-10 w-[78%] -translate-x-1/2 text-center text-white">
            <p className="text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
              "Embrace the art of
              cooking, where flavors
              come alive!"
            </p>
          </div>
        </div>

        <div className="relative px-5 pb-7 pt-4 md:px-6 md:pb-8 md:pt-5">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-[#1f1f1f] transition hover:bg-black/5"
            aria-label="Close login modal"
          >
            <FiX className="text-2xl" />
          </button>

          <h3 className="mt-1 text-[31px] font-semibold tracking-[-0.03em] text-[#1f1f1f]">
            Login
          </h3>
          <p className="mt-4 text-[14px] text-[#323232]">Enter your email to log in.</p>

          <div className="mt-3">
            <input
              className="h-12 w-full rounded-lg border-0 bg-[#f4f5f8] px-4 text-[14px] text-[#252525] outline-none placeholder:text-[#c6c9d3] focus:ring-2 focus:ring-[#f0326a]/20"
              placeholder="Enter your email"
            />
          </div>

          <button className="mt-4 h-12 w-full rounded-lg bg-chefify-pink text-[15px] font-medium text-white transition hover:bg-[#e62d64]">
            Continue
          </button>

          <div className="my-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[#8e919a]">
            <div className="h-px flex-1 bg-[#e6e8ef]" />
            <span>OR</span>
            <div className="h-px flex-1 bg-[#e6e8ef]" />
          </div>

          <p className="mx-auto max-w-[430px] text-center text-[10px] leading-4 text-[#8c8f98]">
            By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
          </p>

          <div className="mt-5 space-y-3">
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#eef1ff] text-[14px] font-medium text-[#ef4b34] transition hover:bg-[#e6ebff]">
              <FaGoogle />
              Continue with Google
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#eef1ff] text-[14px] font-medium text-[#33528b] transition hover:bg-[#e6ebff]">
              <FaFacebookF />
              Continue with Facebook
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#eef1ff] text-[14px] font-medium text-[#111111] transition hover:bg-[#e6ebff]">
              <FaApple />
              Continue with Apple
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
