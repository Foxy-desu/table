import { useState } from "react";

export const useModal =()=> {
  const [modal, setModal]= useState({isOpen:false, data: {}});
  
  function openModal(data) {
    setModal({isOpen: true, data});
  };
  function closeModal() {
    setModal({isOpen: false, data: {}});
  }

  return {
    modal,
    openModal,
    closeModal,
  }
}