/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Navbar, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Redirect, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

const HeaderLogged = (props) => {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  }

  const location = useLocation();

  const menuNotes = () => {
    if (location.pathname === '/notes') {
      return (
        <Navbar.Item as="div">
          <Button
            className="open-button"
            color="white"
            outlined
            onClick={() => props.setIsOpen(true)}>
            <FontAwesomeIcon icon={faList} />
          </Button>
        </Navbar.Item>
      )
    }
  }

  if (redirectToHome === true)
    return <Redirect to={{ pathname: "/" }} />

  const userName = JSON.parse(localStorage.getItem('user')).name;

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={logoImage} alt="Logotipo do Webtations" />
            </Link>
          </Column>
        </Column.Group>
        <Navbar.Burger
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">

          {menuNotes()}


        </Navbar.Segment>
        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
          <Navbar.Item as="div">
            <Dropdown>
              <Dropdown.Trigger>
                <Button className="button" color="white" outlined>
                  <span>{userName} ▼</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/users/edit">Editar conta</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <a href="#" onClick={e => logOut()}>Sair</a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default HeaderLogged;