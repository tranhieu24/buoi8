import { useState } from 'react'

export default function useModal(initial = false) {
  const [open, setOpen] = useState(initial)
  function openModal() {
    setOpen(true)
  }
  function closeModal() {
    setOpen(false)
  }
  return { open, openModal, closeModal }
}
