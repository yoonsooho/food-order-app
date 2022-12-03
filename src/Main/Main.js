import React from "react"
import Header from "./Header"

const Main = (props) => {
  return (
    <>
      <Header modalUpHandler={props.modalUpHandler}></Header>
      {props.children}
    </>
  )
}

export default Main
