import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Main from './components/Main'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Reviews from './components/Reviews'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Main />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id="products">
          <Product />
        </div>
        <div id='previews'>
          <Reviews />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
