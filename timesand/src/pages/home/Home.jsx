import { Divider } from '@chakra-ui/react'
import React from 'react'
import Achive from './sections/Achive'
import Features from './sections/Features'
import Top from './sections/Top'

const Home = () => {
  return (
    <div>
      <Top/>
      <Achive/>
      <Divider />
      <Features/>
    </div>
  )
}

export default Home