import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';


function Cards(props) {
  const navigate = useNavigate();
  return (
    <Card className='card' style={{ width: '21rem', height: '30rem', backgroundColor:'whitesmoke' }}>
      <Card.Img variant="top" src={props.image} style={{paddingRight:'50px',paddingLeft:'50px',paddingTop:'20px',paddingBottom:'10px'}}/>
      <Card.Body>
        <Card.Title onClick={()=>{navigate(`/${props.id}/`)}} className='pdt-card-title'>{props.name}</Card.Title>
        <Card.Text style={{fontSize:'x-large',fontWeight:'600', color:'#b84242'}}>{props.price}/-</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;