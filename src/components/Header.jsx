import React from 'react'
import {Navbar,Container} from 'react-bootstrap' 
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Navbar.Brand href="#home">
     <Link to={"/"} className="fs-4" style={{textDecoration:'none',color:'white'}}> 
     <i class="fa-solid fa-upload fa-bounce"></i>{"  "}
      Media Player
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header