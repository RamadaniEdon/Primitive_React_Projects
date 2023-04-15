import Kollazh from './../images/kollazhi.png'

export default function Header() {
    return (
        <section className='header'>
            <img src={Kollazh} className='header--img'/>
            <h1 className='header--title'>Online Experiences</h1>
            <p className='header--desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}