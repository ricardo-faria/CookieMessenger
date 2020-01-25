import React, { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import './header.css';
import Cookies from 'universal-cookie';


const Header = props =>{
    const cookie = new Cookies();
    const [open,setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    console.log(props);
    function logout(){
      cookie.remove('cookieMessengerToken');
      props.history.push({pathname:'/login'});
    }

    function options(){
      alert("todo options");
    }

    //select the header before and after login
    if (window.location.pathname == '/messenger'){
      return (
        <div className='NavbarStyle'>
          <Navbar expand='md' light  >
            <div className='container'>
              <NavbarBrand tag={Link} to='/'>Cookie Messenger</NavbarBrand>
              <NavbarToggler onClick={toggle}></NavbarToggler>
              <Collapse isOpen = {open} navbar>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <input type="submit" value="Logout" onClick={logout} className="btn btn-primary"/>
                  </NavItem>
                  <NavItem>
                    <input type="submit" value="Opções" onClick={options} className="btn btn-primary"/>
                  </NavItem>
                </Nav>
              </Collapse>
              </div>
          </Navbar>
        </div>
      );
    }
    else{
      return (
        <div className='NavbarStyle'>
          <Navbar expand='md' light  >
            <div className='container'>
              <NavbarBrand tag={Link} to='/'>Cookie Messenger</NavbarBrand>
              <NavbarToggler onClick={toggle}></NavbarToggler>
              <Collapse isOpen = {open} navbar>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink tag={Link} to='/login'>Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/register'>Criar conta</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/messenger'>messenger</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              </div>
          </Navbar>
        </div>
      );
    }
  }

  export default Header;