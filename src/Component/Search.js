import React from 'react'
import{Navbar,Container, Nav, FormControl, Form} from "react-bootstrap"
import { Rating } from '@material-ui/lab'


const Search = ({ searchRating, setSearchRating, setSearchTitle}) =>{
    return(
        <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{fontSize:'24px' ,fontFamily:'Impacter', color:'red' }}>Movie App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link> Contact</Nav.Link>
    </Nav>
    
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>setSearchTitle(e.target.value)}
        
      />
    </Form>
      
     
        <Rating
          name="read-only"
          value={searchRating}
          onChange={(event, newValue) => {
            setSearchRating(newValue);
          }}
         />
    </Container>
  </Navbar>
  
        </div>
    )
}
export default Search;