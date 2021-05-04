import React from 'react'
import logo from '../../assets/logo signed-in.svg'
import './header.css';
import {Link} from 'react-router-dom'
import image from '../../assets/joel2.jpg'

const Header = ()=>(
    <div className="header">
        <div className="logo">
            <Link to='/'><img src={logo} alt=""/></Link>
        </div>
        <div className="items">
            <Link to='/articles/new' className='link'>Write</Link>
            <Link to='/blogs' className='link'>Blogs</Link>
            <Link to='/about' className='link'>About</Link>
            <img src={image} alt="img"/>
        </div>
    </div>
)

export default Header