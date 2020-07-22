import React from 'react'
import Logo from './components/Logo'
import './app.css'

export default function App(){
    return(
        <>
        <header>
            <Logo/>
            <ion-icon id="scroll-arrow" name="chevron-down-outline"></ion-icon>
        </header>
        <div className="transition" ></div>
        <div className="content">
        </div>
        </>
    )
}