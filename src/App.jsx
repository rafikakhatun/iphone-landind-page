
import { useEffect } from 'react'
import './App.css'
import Footer from './component/Footer'
import Hero from './component/Hero'
import MobileItemSection from './component/MobileItemSection'
import Navbar from './component/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
      Aos.init({
        duration: 2000,
        once: true,
      });
    }, []);


  return (

    
  <>
    <Navbar></Navbar>
    <Hero></Hero>
    <MobileItemSection></MobileItemSection>
    <Footer></Footer>

  </>
  )
}

export default App
