import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div style={{ color:`purple` }}>
      <Link to="/about/">About</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world!</p>
      <img src="http://picsum.photos/400" alt=""/>
    </div>
  )
}
