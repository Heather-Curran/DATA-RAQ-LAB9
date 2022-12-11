//Import React, bootstrap elements and routes so you can use them
//Import content, header and footer components so they can be displayed
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';
//Client side routing
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


//Extend React.Component and add render()
class App extends React.Component {
  //Visual Piece
  //Can write js if you wrap it in curly brackets{}
  render() {
    return (
      <Router>
        <div className="App">
          {/* Navigation Bar (jsx) - changes url if clicked*/}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            {/* When url path changes to this, show this component */}
            <Route path='/' element={<Content />}></Route>
            <Route path='/read' element={<Read />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />}></Route>
          </Routes>

          {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
