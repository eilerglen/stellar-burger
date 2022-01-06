import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openingModal = () => {
    setIsOpen(true);
  }
  const closingModal = () => {
    setIsOpen(false);
  }
  return  {
    isOpen,
    openingModal,
    closingModal
  }
}