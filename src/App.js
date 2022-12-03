import { Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import "./App.css"
import Main from "./Main/Main"
import MealsList from "./Main/MealsList"
import { useState } from "react"
import Modal from "./modal/Modal"

function App() {
  let [modal, setModal] = useState(false)

  const modalUpHandler = () => {
    setModal(true)
  }
  const modalDownHandler = () => {
    setModal(false)
  }
  return (
    <Main modalUpHandler={modalUpHandler}>
      {modal && <Modal modalDownHandler={modalDownHandler} />}
      <Routes>
        <Route path="/" element={<MealsList />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Main>
  )
}

export default App
