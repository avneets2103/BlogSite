import React from 'react';
import './Header.css';
import {Icon, Home, YourPosts, CreatePost,Logout, Login, SignUp} from './headerComponentIndex';
import { useSelector } from 'react-redux';

function Header(props){
    const status = useSelector((state)=>{
        return state.auth.status;
    });
    const loggedIn = status;
    return (
        <div className='header'>
            <Icon/>
            <div className="controls">
                {loggedIn && <Home/>}
                {loggedIn && <YourPosts/>}
                {loggedIn && <CreatePost/>}
            </div>
            <div className='auth'>
                {loggedIn && <Logout/>}
                {!loggedIn && <Login/>}
                {!loggedIn && <SignUp/>}
            </div>
        </div>
    )
}

export default Header
