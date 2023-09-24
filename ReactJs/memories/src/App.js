import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../src/components/Card'

const App = () => {
    const [rests, setRests] = useState(null)

    const fetchData = async () =>{
        const restData = await axios.get('http://localhost:8000/')
        const data = Object.keys(restData.data.data).map(rest => restData.data.data[rest])
        setRests(data)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    console.log(rests)

    return (
        <div className = "App">
            <h1> Memories</h1>
            <div className='rest-feed'>
               {rests?.map(rest => <Card key = {rest.id} rest = {rest} />)} 
            </div>
        </div>
    )
}

export default App