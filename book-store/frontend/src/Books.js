import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Books = () => {
    const [books, setBooks] = useState([]);

    const fetchAllBooks = async ()=>{
        try {
            const res = await axios.get('http://localhost:8800/books');
            setBooks(res.data);
            console.log(books)
            // console.log(res);
        } catch (err) {
            console.log(err.response)
        }
    }

    const handleDelete = async(id)=>{
        try {
            await axios.delete('http://localhost:8800/books/'+id)
            window.location.reload();
        } catch (error) {
          console.log(error)  
        }
    }

    const handleUpdate = ()=>{
        console.log("clicked delete")
    }

    useEffect(()=>{
        fetchAllBooks();
    },[])

  return (
    <div>
        <div className='books'>
            {books.map((book)=>(
                <div className='book' key={book.id}>
                   {book.cover &&  <img src={book.cover} alt=''/>}
                   <h2>{book.title}</h2>
                   <p>{book.desc}</p>
                   <button onClick={()=>handleDelete(book.id)} className='delete'>Delete</button>
                   <button onClick={() => handleUpdate(book.id)} className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Books
