import styled from "styled-components"

let MealsListStyle = styled.div`
  background-color: #3c3a39;
  height: 100vh;
  width: 100vw;
  display: inline-block;
  nav {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto;
    width: 800px;
    background-color: white;
    margin-top: 80px;
    div.mealsItem {
      display: flex;
      justify-content: space-between;
      ul {
        li {
          list-style: none;
        }
      }
    }
  }
`

export default MealsListStyle
