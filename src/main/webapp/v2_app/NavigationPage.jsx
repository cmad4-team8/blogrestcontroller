import React from 'react'
import ReactDOM from 'react-dom';
import {Navbar, Nav,NavItem, NavDropdown, MenuItem, Glyphicon, className} from  'react-bootstrap';
import DisplayMain from './DisplayMain.jsx'
import RegisterUser from './RegistrationPage.jsx'
import ProfileUpdate from './ProfileUpdate.jsx'
import LoginPage from './LoginPage.jsx'
import NewPost from './NewPost.jsx'
import BlogDetail from './BlogDetail.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const nav_routes = [
  { path: '/',
    exact: true,
    main: () => <DisplayMain />
  },
  { path: '/signup',
      main: () => <RegisterUser url={'rest/user/signup'}/>
    },
  { path: '/prof_update',
    main: () => <ProfileUpdate url={'rest/user/prof_update'} />
  },
  { path: '/login',
      main: () => <LoginPage url={'rest/user/login'} />
    },
  { path: '/about',
    main: () => <h2>About Blog Rest Controller</h2>
  },
  { path: '/search',
      main: () => <h2>Search Content</h2>
    },
  { path: '/new_blog',
      main: () => <NewPost url={'blog/post/create'} login_id={''} />
    },
  { path: '/Change_Settings',
      main: () => <h2>Change Settings</h2>
    },
  { path: '/logout',
        main: () => <h2>You have Successfully Logged out !!!</h2>
      },
  { path: '/blog/:id',
        main: () => <BlogDetail url={'post/'} />
      },
  { path: '/help',
          main: () => <h2>Help will be given to those who ask for it</h2>
        }

]
const NavBar = () => (
    <Router basename="/blogrestcontroller">
        <div>
        <div>
            <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                              <Link to="/" id="main-home"> <span className="navItem"><Glyphicon glyph="home" />Home</span></Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} id="new-blog-post"><Link to="/new_blog" id="new-blo"><span className="navItem"><Glyphicon glyph="pencil" />NewBlog</span></Link></NavItem>
                            <NavItem eventKey={2} ><Link to="/about"><span className="navItem"><Glyphicon glyph="tag" />About</span></Link></NavItem>
                            <NavItem eventKey={4} ><input type="text" className="form-control" placeholder="Search" id='search-item'/><Link to="/search" id="post-search"><span className="navItem"><Glyphicon glyph="search" /></span></Link></NavItem>
                            <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} id="updateProfile" ><Link to="/prof_update" id="prof-update">Change Profile</Link></MenuItem>
                                <MenuItem eventKey={3.2}><Link to="/Change_Settings" id="change-set">Change Settings</Link></MenuItem>
                                <MenuItem eventKey={3.3}><Glyphicon glyph="logout" /><Link to="/logout" id="logout">Logout</Link></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}><Link to="/help" id="help">Help</Link></MenuItem>
                           </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} id="user-register"><Link to="/signup" id="signup"><span className="navItem"><Glyphicon glyph="user" />Register</span></Link></NavItem>
                            <NavItem eventKey={2} id="user-login"><Link to="/login" id="login"><span className="navItem"><Glyphicon glyph="log-in" />Login</span></Link></NavItem>
                          </Nav>
                     </Navbar.Collapse>
            </Navbar>
        </div>
        <div>
            {nav_routes.map((route, index) => (
                      // You can render a <Route> in as many places
                      // as you want in your app. It will render along
                      // with any other <Route>s that also match the URL.
                      // So, a sidebar or breadcrumbs or anything else
                      // that requires you to render multiple things
                      // in multiple places at the same URL is nothing
                      // more than multiple <Route>s.
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                      />
                    ))}
        </div>
        </div>
    </Router>
)

export default NavBar