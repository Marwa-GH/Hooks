import React from 'react'
import{Card} from 'react-bootstrap'
import {Rating} from "@material-ui/lab"
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieCard = ({movie}) => {
    return (
        <div >
               <Card style={{ width: '14rem',height:'35rem',animationDelay: '-2s'  }}>
                 <Card.Img variant="top" src={movie.image} />
                     <Card.Body>
                        <Card.Text>{movie.name} </Card.Text>
                        <Card.Text>{movie.date}</Card.Text>
                        <Card.Text>{movie.description}</Card.Text>
                        <Card.Text> {movie.type}</Card.Text>
                         <Rating name="read-only" value={movie.rating} readOnly />

                  </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard;
