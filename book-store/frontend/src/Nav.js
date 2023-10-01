import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ()=>{
    return (
        <div>
            <ul>
                <li><Link to='/add'>Add</Link></li>
                <li><Link to='/'>Books</Link></li>
            </ul>  
        </div>
    )
}

export default Nav
