import axios from 'axios'
import {useState, useEffect} from 'react'

import './App.css';

const  App = () =>{
  const [hotels, setHotels] = useState(null)

  const fetchData = async ()=>{
     const hotelData = await axios.get('https://b1d821b8-8081-407e-a88e-c0a02f7786b4-asia-south1.apps.astra.datastax.com/api/graphql/hotels ')
     const data = Object.keys(hotelData.data.data).map(hotel => hotelData.data.data[hotel])
     console.log(hotelData)
     setHotels(data)
  }

  useEffect(
    ()=>{
      fetchData()
    },[])

  return (
    <div className="App">
     <h1>Hotels Info</h1>
     <div className='hotel-feed'>
      { hotels?.map(hotel => <Card key = {hotel} hotel = {hotel}></Card>)}
     </div>
    </div>
  );
}

export default App
