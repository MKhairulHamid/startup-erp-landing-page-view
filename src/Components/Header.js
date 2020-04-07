import React from 'react';
import Swal from 'sweetalert2';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-scroll';


import '../sass/header.sass';
import price from '../Assets/Image/price.png'


const Header = () => {
  
  const onBtnLogin = () => {
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['', '']
      }).queue([
        {
          title: 'Login',
          text: 'Enter your email'
        },
        {
          text: 'Enter your password'
        }
      ]).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Welcome Back !',
            confirmButtonText: 'Lovely!'
          })
        }
      })
}

  return (
    <div>
      <Navbar className="navbarRoot">
          <Navbar variant="dark" className="leftSection">
            <Navbar.Brand href="#home" className="navbarHome">
              <img
                alt="Logo"
                src={price}
                width="45"
                height="45"
                className="navbarLogo"
              />{' '}
              Home
            </Navbar.Brand>
          </Navbar>

        <Navbar className="rightSection">
          <Navbar.Brand href="#" className="navbarAbout">
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
              About
            </Link>  
          </Navbar.Brand>
          <Navbar.Brand href="#" className="navbarPricing">
            <Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>
              Pricing
            </Link>  
          </Navbar.Brand>
          <Navbar.Brand href="#" className="navbarContact">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
              Contact
            </Link>  
          </Navbar.Brand>
          <Button onClick={onBtnLogin} variant="outline-primary" className="navbarLogin">
            LOGIN
          </Button>
          </Navbar>
        </Navbar>
    </div>
  );
}

export default Header;