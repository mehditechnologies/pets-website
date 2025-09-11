import Head from '../Head.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Gallery from './Gallery.jsx'
import Services from './Services.jsx'
import PetGroom from './PetGrooming.jsx'
import Product from './Products.jsx'
import Facilities from './Facilities.jsx'
import Foot from '../Foot.jsx'

function Home() {

  return (
    <>
    <Head/>
    <Hero/>
    <About/>
    <Services/>
    <Product/>
    <Facilities/>
    <Gallery/>
    <PetGroom/>
    <Foot/>
    </>
  )
}

export default Home