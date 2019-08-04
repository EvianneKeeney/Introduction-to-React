import React from "react"
import ReactDOM from "react-dom"
import "./main.scss"
import Header from "./components/Header"

ReactDOM.render(<Header />, document.getElementById("app"));

/*
let text = "I am a React element! Hear me roar!"

let headerElement = (
  <h1
    id="special-header"
    className="header"
    onClick={event => {
      alert("Roar!")
    }}
  >
    {text}
  </h1>
)

ReactDOM.render(headerElement, document.getElementById("app"))*/