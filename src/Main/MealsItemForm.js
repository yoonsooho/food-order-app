import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { countUp } from "../store/userSlice"
import MealsItemFormStyle from "./MealsItemFormStyle"
const MealsItemForm = () => {
  let dispatch = useDispatch()
  let ref = useRef()
  let MealsFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <MealsItemFormStyle>
      <form onSubmit={MealsFormSubmit}>
        <div>
          <label htmlFor="Amount">Amount</label>
          <input id="Amount" step="1" type="number" min="1" max="5" defaultValue="1" ref={ref} />
        </div>
        <button
          onClick={() => {
            dispatch(countUp(ref.current.value))
          }}
        >
          Add
        </button>
      </form>
    </MealsItemFormStyle>
  )
}

export default MealsItemForm
