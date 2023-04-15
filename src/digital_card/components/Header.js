import Laura from "./../images/laura.png";
// import "./../App.css";

export default function Header(){
    return (
        <div>
            <img src={Laura}/>
            <div className="contact">
                <h3 className="contact--name">Laura Smith</h3>
                <p className="contact--job">Frontend Developer</p>
                <p className="contact--smth">laurasmith.website</p>
                <div className="contact--buttons">
                    <button className="contact--button--email"><i className="fa-regular fa-envelope"></i><span>Email</span></button>
                    <button className="contact--button--linkedin"><i className="fa-brands fa-linkedin"></i><span>Linkedin</span></button>
                </div>
            </div>
        </div>
    )
}