import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Grid } from "@material-ui/core"

export default function Header() {
  return (
    <header>
      <h1>Slash Till You Crash</h1>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>login</Link>
      </nav>
    </header>
  )
}
