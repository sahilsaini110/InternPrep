import React from 'react'
import { useState} from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc:"",
        cover:"",
    });

    const handleChange =(e)=>{
        const value = e.target.value;
        setBook(prev=> ({...prev,[e.target.name]:value}));
    }

    const navigate = useNavigate();
    const location = useLocation();
    
    const id = location.pathname.split('/')[2];

    const handleClick = async (e)=>{
       e.preventDefault();
       try {
        await axios.put('http://localhost:8800/books/'+id, book)
        navigate('/')
       } catch (error) {
        console.log(error)
       }
    }


  return (
    <div className='form'>
    <h1>Update Book</h1>
    <input type='text' placeholder='title' onChange={handleChange} name='title'/>
    <input type='text' placeholder='desc' onChange={handleChange} name='desc'/>
    <input type='text' placeholder='cover' onChange={handleChange} name='cover'/>
    <button onClick={handleClick}>Update Book</button>
    </div>
  )
}

export default Update
