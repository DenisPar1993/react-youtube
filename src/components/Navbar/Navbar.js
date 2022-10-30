import React, { useState } from 'react'
import logo from '../../Assets/youtube-logo.png'
import './Navbar.css';
import avatar from '../../Assets/avatar.jpg'
export const Navbar = () => {
    const [isDarkTheme,setisDarkTheme]=useState(false)
    const [navOpen,setNavOpen]=useState(false)
    const [inpValue,setInpValue]=useState('')
  return (
    <>
    <header>
        <div className="headerDiv">
            <div>
                <div className="humburger">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <img  src={logo} alt="" />
            </div>
            <div className="searchContainer">
                <div className="searchBox">
                    <input 
                    value={inpValue}
                    onChange={(e)=>setInpValue(e.target.value)}
                    type="text" placeholder='Search'/>
                   {inpValue && <span onClick={()=>setInpValue('')} className='material-symbols-rounded'>close</span>}
                </div>
                <div className="searchBtn">
                <span className='material-symbols-rounded'>search</span>
                </div>
                <div className="searchMic">
                <span className='material-symbols-rounded active'>mic</span>
                </div>
            </div>
            <div className="profileContainer">
            <span className='material-symbols-rounded'>add_box</span>
            <span className='material-symbols-rounded'>notifications</span>
            <img 
               width={40}
                height={40}
                onClick={()=>setNavOpen(!navOpen)}
                 src={avatar} alt="" />
            </div>
        </div>
                    <span className='material-symbols-rounded'>
                        light_mode
                    </span>
        {navOpen&&<div className="profileBtns">
            <div className="avatarInfo profileTab">
                <img src={avatar} alt="" />
                <p>Денис</p>
                </div>
             <div className="horizontalLine"></div>
             <div className="profileTabs">
                <div className="profileTab">
                    <span className='material-symbols-rounded'>
                        account_box
                    </span>
                    <p>Your channel</p>
                </div>
                <div className="profileTab">
                    <span className='material-symbols-rounded'>
                        play_circle
                    </span>
                    <p>Youtube Studio</p>
                </div>
                <div className="profileTab">
                    <span className='material-symbols-rounded'>
                        logout
                    </span>
                    <p>Sign out</p>
                </div>
                <div className="horizontalLine"></div>
                {isDarkTheme&&<div className="profileTab">
                    <p>Light Theme</p>
                </div>}
                {!isDarkTheme&&<div className="profileTab">
                    <span className='material-symbols-rounded'>
                        bedtime
                    </span>
                    <p>Dark Theme</p>
                </div>}
                <div className="profileTab">
                    <span className='material-symbols-rounded'>
                        settings
                    </span>
                    <p>Settings</p>
                </div>
                <div className="horizontalLine"></div>
                <div className="profileTab">
                    <span className='material-symbols-rounded'>
                        help
                    </span>
                    <p>Help</p>
                </div>
                <div className="profileTab">
                    <span className='material-symbols-rounded'>
                        sms_failed
                    </span>
                    <p>Send Feedback</p>
                </div>
                
             </div>
            
        </div>}
    </header>
    </>
  )
}
