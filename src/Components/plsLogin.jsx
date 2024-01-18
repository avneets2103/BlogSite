import React from 'react'
import './plsLogin.css'
import { NavLink } from 'react-router-dom'

function PlsLogin() {
    return (
        <div className='message'>
            <p>Pls <NavLink to='/Login'> Login </NavLink> or <NavLink to='/SignUp'> SignUp </NavLink>  to view Posts</p>
        </div>
    )
}

export default PlsLogin
