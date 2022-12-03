import React, { useState } from "react"
import Layout from "./../style/Layout"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = (props) => {
  let navigate = useNavigate()
  const state = useSelector((state) => state)

  return (
    <Layout>
      <header>
        <button
          className="header_left"
          onClick={() => {
            navigate("/")
          }}
        >
          음식주문어플
        </button>
        <div className="header_right">
          <button
            onClick={() => {
              navigate("/login")
            }}
          >
            로그인
          </button>
          <button>로그아웃</button>
          <button onClick={props.modalUpHandler}>주문하기 {state.counter.CartAmount}</button>
        </div>
      </header>
    </Layout>
  )
}

export default Header
