import Swimmer from './../images/swimmer.png'
import Star from './../images/star.png'

export default function Card() {
    return (
        <div className='card'>
            <img src={Swimmer} className='card--img' />
            <span className='card--availability'>SOLD OUT</span>
            <p className='card--review'><img src={Star} className='card--star' /> <span className='card--rating'>5.0</span> <span className='gray'>(<span className='card--num'>6</span>)•<span className='card--state'>USA</span></span></p>
            <p className='card--desc'>Life lessons with Katie Zaferes</p>
            <p className='card--price'>From <span className='card--price--num'>$136</span> <span className='card--price--perwhat'>/ person</span></p>
        </div>
    )
}