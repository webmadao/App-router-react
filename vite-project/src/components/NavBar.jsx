import React from 'react'
import {Link} from 'react-router-dom' 
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <img src="https://web-id.fr/storage/logos%2FReact_logo_wordmark.png" alt="" />
        <ul>
            <li> 
                <Link className='lien' to='/'>Home</Link>
            </li>
            <li>
                <Link className='lien' to='/html'>Html</Link>
            </li>
            <li>
                <Link className='lien' to='/css'>Css</Link>
            </li>
            <li>
                <Link className='lien' to='/js'>Js</Link>
            </li>
        </ul>

    </div>
  )
}
export default NavBar