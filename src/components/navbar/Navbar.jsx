import React from 'react'
import NavbarBotton from './navbar-bottom/NavbarBotton'
import { Container } from '../../utils/Components'
import NavbarTop from './navbar-top/NavbarTop'

const Navbar = () => {
  return  (
    <Container>
       <NavbarTop/>
       <NavbarBotton/>
    </Container>
  )
}

export default Navbar