import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

export default function App() {
    return (
        <div>
            <Navbar />
            {/* <Header /> */}
            <section>
                <Card />
            </section>
        </div>
    )
}