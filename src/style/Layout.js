import styled from "styled-components"

const Layout = styled.div`
  header {
    background-color: #8a2b06;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    a {
      text-decoration: none;
    }
    button {
      border: 0;
      outline: 0;
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
    div {
      display: flex;
      text-align: center;
      display: block;
    }
    div.header_left {
      width: 250px;
      padding: 30px 0;
    }
    div.header_right {
      padding: 30px 0;
      width: 500px;
      display: flex;
      button {
        width: 100%;
      }
    }
  }
`

export default Layout
