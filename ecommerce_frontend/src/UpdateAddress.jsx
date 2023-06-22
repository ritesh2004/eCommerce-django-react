import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Authcontext from './context/Authcontext';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function UpdateAddress() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [contact, setContact] = useState();


    const {user} = useContext(Authcontext);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
      fetchAddress()
    },[])

    const getAddress = async (e)=>{
      e.preventDefault()
      console.log(state)
      let formfield = new FormData();
      formfield.append('email',email);
      formfield.append('username',username);
      formfield.append('name',name);
      formfield.append('contact',contact);
      formfield.append('address1',address1);
      formfield.append('address2',address2);
      formfield.append('city',city);
      formfield.append('state',state);
      formfield.append('zipcode',zip);

      try {
        await axios({
          method:"put",
          url:`http://127.0.0.1:8000/address/${id}/`,
          data: formfield
        }).then((res)=>{
          console.log(res);
        })
        navigate(`/address`)
      } catch (error) {
        alert("Something Went Wrong!");
        console.log(error)
      }
    }

    const fetchAddress = async () =>{
      let res = await axios.get(`http://127.0.0.1:8000/address/${id}`);
      setName(res.data.name)
      setUsername(res.data.username)
      setContact(res.data.contact)
      setAddress1(res.data.address1)
      setAddress2(res.data.address2)
      setCity(res.data.city)
      setState(res.data.state)
      setZip(res.data.zipcode)
      setEmail(res.data.email)
    }
      

  return (
    <div className="address">
    <Form onSubmit={getAddress}>
    <h2 className='text-center' style={{marginBottom:'50px'}}>UPDATE ADDRESS</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Contact No</Form.Label>
        <Form.Control placeholder="Contact No" type='number' value={contact} onChange={(e)=>{setContact(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address 1</Form.Label>
        <Form.Control placeholder="1234 Main St" value={address1} onChange={(e)=>{setAddress1(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" value={address2} onChange={(e)=>{setAddress2(e.target.value)}} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder='Salt Lake, Kolkata' value={city} onChange={(e)=>{setCity(e.target.value)}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." value={state} onChange={(e)=>{setState(e.target.value)}}>
            <option>Choose...</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type='number' value={zip} onChange={(e)=>{setZip(e.target.value)}} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default UpdateAddress;