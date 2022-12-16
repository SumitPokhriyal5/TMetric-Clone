import { Divider } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Achive from './sections/Achive'
import Features from './sections/Features'
import Integration from './sections/Integration'
import Top from './sections/Top'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Top/>
      <Achive/>
      <Divider />
      <Features/>
      <Integration/>
      <Divider />
      <Footer/>
    </div>
  )
}

export default Home