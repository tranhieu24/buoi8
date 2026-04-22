import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SearchResultsPage from './pages/SearchResultsPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import RecipeBoxPage from './pages/RecipeBoxPage'
import SubscribePage from './pages/SubscribePage'

import { AuthProvider } from './context/AuthContext'
import { RecipeBoxProvider } from './context/RecipeBoxContext'
import OnboardingModal from './components/Modal/OnboardingModal'
import LoginModal from './components/Modal/LoginModal'
import useModal from './hooks/useModal'

export default function App() {
  const onboarding = useModal(false)
  const login = useModal(false)

  return (
    <AuthProvider>
      <RecipeBoxProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white text-gray-800">
            <Navbar />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                <Route path="/recipe-box" element={<RecipeBoxPage />} />
                <Route path="/subscribe" element={<SubscribePage />} />
              </Routes>

              <div className="max-w-7xl mx-auto p-6">
                <div className="flex gap-3 mt-6">
                  <button onClick={onboarding.openModal} className="px-3 py-2 bg-pink-600 text-white rounded">Open Onboarding</button>
                  <button onClick={login.openModal} className="px-3 py-2 border rounded">Open Login</button>
                </div>
              </div>
            </main>

            <Footer />

            <OnboardingModal open={onboarding.open} onClose={onboarding.closeModal} />
            <LoginModal open={login.open} onClose={login.closeModal} />

            <ToastContainer position="bottom-right" />
          </div>
        </Router>
      </RecipeBoxProvider>
    </AuthProvider>
  )
}