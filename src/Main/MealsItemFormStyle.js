import styled from "styled-components"

let MealsItemFormStyle = styled.div`
  padding: 20px;

  form {
    div {
      width: 100%;
      label {
        margin-right: 10px;
      }
      input {
        width: 50px;
      }
      input[type="number"]::-webkit-inner-spin-button {
        opacity: 1;
        width: 20px;
      }
    }
    button {
      font: inherit;
      cursor: pointer;
      background-color: #8a2b06;
      border: 1px solid #8a2b06;
      color: white;
      padding: 0.25rem 2rem;
      border-radius: 20px;
      font-weight: bold;
      margin: 10px 15px;
    }
  }
`
export default MealsItemFormStyle
