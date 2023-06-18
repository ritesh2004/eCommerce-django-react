import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [specification, setSpec] = useState("");
    const [image, setImage] = useState(null);

    const history = useNavigate();

    const { id } = useParams();

    const updateProduct = async () =>{
        let formfield = new FormData();
        formfield.append('name', name);
        formfield.append('price', price);
        formfield.append('category', category);
        formfield.append('specification', specification);
        if (image !== null){
          formfield.append('image',image);
          await axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formfield
        }).then((res)=>{
            console.log(res);
            history('/products');
        })
        }
        else{
          alert("Please choose product picture");
        }
        
        
    }

    const getProduct = async () =>{
        const res = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        console.log(res.data);
        setName(res.data.name);
        setImage(res.data.image);
        setPrice(res.data.price);
        setCategory(res.data.category);
        setSpec(res.data.specification);
    }

    useEffect(()=>{
        getProduct();
    }, []);

  return (
    <div className="addproducts">
    <Form>
        <h2 className='text-center'>UPDATE PRODUCT</h2>
        <Form.Label className='form-label'>Product Picture</Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className="img">
        <img src={image} alt="product image" style={{height:'200px', width:'200px', marginBottom:'20px', borderRadius:'7px'}} />
        </div>
        <Form.Control type="file" name='image' onChange={(event)=>{setImage(event.target.files[0])}} />
        <Form.Label className='form-label'>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" name='name' onChange={(event)=>{setName(event.target.value)}} value={name}/>
        <Form.Label className='form-label'>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Product Price" name='price' onChange={(event)=>{setPrice(event.target.value)}} value={price}/>
        <Form.Label className='form-label'>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Category" name='category' onChange={(event)=>{setCategory(event.target.value)}} value={category}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='form-label'>Product Specification</Form.Label>
        <Form.Control as="textarea" rows={8} name='spec' onChange={(event)=>{setSpec(event.target.value)}} value={specification}/>
      </Form.Group>
      <br />
      <Button variant="success" onClick={updateProduct}>Update</Button>
    </Form>
    </div>
  );
}

export default Update;