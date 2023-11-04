import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link className="brand" to='/'><h1>Shayan Recipe</h1></Link>
            <Searchbar />
            <Link to='/create'>Create Recipe</Link>
        </nav>
    </div>
  )
}
