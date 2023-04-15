 import "./../style.css"
 import ReactLogo from "./../images/icon.png"
 
 export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="left">
                <img src={ReactLogo}/>
                <h3>ReactFacts</h3>
            </div>
            <p>React Course - Project 1</p>
        </nav>
    )
 }