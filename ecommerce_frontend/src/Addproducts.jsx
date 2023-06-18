import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Addproducts() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [specification, setSpecification] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState();

    const history = useNavigate();

    const uploadProduct = async () =>{
        let formfield = new FormData();
        formfield.append('name', name);
        formfield.append('price', price);
        formfield.append('specification', specification);
        formfield.append('category', category);
        if (image !== null){
            formfield.append('image',image);
        }

        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/",
            data: formfield
        }).then((res)=>{
            console.log(res);
            history('/products');
        })
    }

  return (
    <div className="addproducts">
    <Form>
        <h2 className='text-center'>ADD PRODUCTS</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='form-label'>Product Picture</Form.Label>
        <Form.Control type="file" name='image' onChange={(event)=>{setImage(event.target.files[0])}} src={image}/>
        <Form.Label className='form-label'>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" name='name' onChange={(event)=>{setName(event.target.value)}} value={name}/>
        <Form.Label className='form-label'>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Product Price" name='price' onChange={(event)=>{setPrice(event.target.value)}} value={price}/>
        <Form.Label className='form-label'>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Category" name='category' onChange={(event)=>{setCategory(event.target.value)}} value={category}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='form-label'>Product Specification</Form.Label>
        <Form.Control as="textarea" rows={4} name='des' onChange={(event)=>{setSpecification(event.target.value)}} value={specification}/>
      </Form.Group>
      <br />
      <Button variant="success" onClick={uploadProduct}>Add Product</Button>
    </Form>
    </div>
  );
}

export default Addproducts;