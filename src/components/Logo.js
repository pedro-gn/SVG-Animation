import React from 'react'
import './logo.css'
import {ReactComponent as ReactLogo} from '../images/image.svg'
import {ReactComponent as Circle} from '../images/circle.svg'




export default function Logo(){
    const [animate, setAnimate] = React.useState(false);
    const circle = React.createRef();
    React.useEffect( ()=> {
        if(animate){
                circle.current.style.display = "inline"
            }
        },[animate, circle]);
        setInterval(() => {
            setAnimate(true)   
        },2000);
    return (
        <>
        <div  className="logo">
            <ReactLogo/>
        </div>
        <div  className={animate? "circle" : null} >
            <Circle id="circle" ref={circle}/>
        </div>
        </>
    )
};


