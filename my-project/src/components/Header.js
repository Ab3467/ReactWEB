import React from 'react'
import Logo from "../assets/logo.png"

export default function Header() {
  return (
    <header id='header'>
      <img src={Logo} alt=""/>
      <h1>Investment Calculator</h1>
    </header>
  )
}
