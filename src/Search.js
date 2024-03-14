import React from "react";

import data from './books/fantasy.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ChangeEvent, useState } from "react";

function SearchBar()
{
    const [inputName, setInputName] = useState("");

    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
      // 👇 Store the input value to local state
      setInputText(e.target.value);
    };
  

    <div>
    <input type="text" onChange={handleChange} value={inputText} />

    {/* 👇 Use the input value from state */}
    <p>Your input: {inputText}</p>

    {data.map((el) => 
     {if (el.title.includes(inputText)){
      
        return(
        <div class="row">
        <div class="col-2 mx-4" key={el.asin}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.img}/>
        <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          EUR {el.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card>
        </div>    
        </div>
        )
      }}
    )}
    </div>

  

}

export default SearchBar;