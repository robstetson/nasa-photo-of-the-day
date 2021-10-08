import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Spinner } from 'reactstrap';


export default function TitleFunc(){

const [title, setTitle] = useState('')


useEffect(()=>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=Ovhvp6unVUwRnlCgwRbzlTdaEDqhQEdFn6o7UikV')
.then(resp => {
  setTitle(resp.data.title)
})
.catch(err => {
  console.error(err);
})

},[])


return (
  <div className="App">
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
   
      <h1>{title}</h1>
      </div>
)
}


// just adding a line to save