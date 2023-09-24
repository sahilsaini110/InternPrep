import axios from 'axios'
import {useState, useEffect} from 'react'

const App = () => {
    const [rest, setRest] = useState(null)

    const fetchData = async () =>{
        const restData = await axios.get('https://silver-space-bassoon-rxrp76pqxx5cw5v5-8000.app.github.dev/')
        setrest(restData)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    console.log(rest)

    return (
        <div className = "App">
            hello
        </div>
    )
}

export default App