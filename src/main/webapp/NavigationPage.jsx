import React from 'react'
import {Navbar, Nav,NavItem, NavDropdown, MenuItem, Glyphicon, className} from  'react-bootstrap';

class NavigationPage  extends React.Component {
      
     render(){
          var style= {
             color: "#0BB"
         }

         var title = "Team8";
         var newbloglabel = "NewBlog";
         var aboutlabel   = "About";
         var changeprofile = "Change Profile";
         var changeset     = "Change Settings";
         var logoutlabel   = "Logout";
         var reglabel      = "Register";
         var loginlabel    = "Login";
         var helplabel     = "Help";
         var searchlabel   = "Search";
         var userlabel     = "User";

         const navbarInstance = (
             <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                          <a href="#" id="main-home"> <span className="navItem"><Glyphicon glyph="home" />{title} </span></a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#" id="new-blog-post"><span className="navItem"><Glyphicon glyph="pencil" />{newbloglabel}</span></NavItem>
                    <NavItem eventKey={2} href="#"><span className="navItem"><Glyphicon glyph="tag" />{aboutlabel}</span></NavItem>
                    <NavItem eventKey={4} href="#"><input type="text" className="form-control" placeholder="Search" id='search-item'/><span className="navItem"><Glyphicon glyph="search" /></span></NavItem>
                    <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} id="updateProfile" >{changeprofile} </MenuItem>
                        <MenuItem eventKey={3.2}>{changeset}</MenuItem>
                        <MenuItem eventKey={3.3}><Glyphicon glyph="logout" />{logoutlabel}</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>{helplabel}</MenuItem>
                   </NavDropdown>
                  </Nav>

                  <Nav pullRight>
                    <NavItem eventKey={1} href="#" id="user-register"><span className="navItem"><Glyphicon glyph="user" />{reglabel}</span></NavItem>
                    <NavItem eventKey={2} href="#" id="user-login"><span className="navItem"><Glyphicon glyph="log-in" />{loginlabel}</span></NavItem>
                  </Nav>
                </Navbar.Collapse>
             </Navbar>);

         return ( navbarInstance);
    }

}
export default NavigationPage;

