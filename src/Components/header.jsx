import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const access_token = localStorage.getItem("token");


    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    }



    return (
        <div className='header'>
            <div>
                <img src="/assets/images/skidos-logo.png" alt="" />
                <span>Announcements</span>
            </div>
            <div>
                {!access_token ? <Link to="/" className='login_btn'>Log in</Link> : <Link onClick={logout} className='login_btn'>Log out</Link>}

            </div>
        </div>
    )
}
