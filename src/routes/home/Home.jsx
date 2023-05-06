import React from 'react'
import Categoris from '../../components/categoris/Categoris'
import Hero from '../../components/minpaduct/Hero'
import Praducts from '../../components/praducts/Praducts'
import Recklama from '../../components/reklama/Recklama'
import { Container } from '../../utils/Components'

const Home = () => {
  return (
    <Container>
      <Hero/>
      <Recklama/>
      <Categoris/>
      <Praducts/>
    </Container>
  )
}

export default Home