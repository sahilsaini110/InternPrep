const fetch = require('node-fetch')

export.handler = async function (event){
    const query = `
    query{
        hotel_data{
          values{
            id,
            name,
            rating
          }
        }
      }
    `
    
    url = 'https://b1d821b8-8081-407e-a88e-c0a02f7786b4-asia-south1.apps.astra.datastax.com/api/graphql/hotels'
    const options = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'x-cassandra-token': 'AstraCS:NPpeCcyBiUcWfxmZFIcQomdy:e4a79ced7f97e2a7a4d3a09283a769e15a6f864630494af7212531e39b57fbb9'
        },
        body: JSON.stringify({query})
    }
    const response = await fetch(url, options)
}

try{
    const responseBody = await response.json()
    return {
        statusCode : 200,
        body: JSON.stringify(responseBody)
    }
}catch(e){
    console.log(e)
    body: JSON.stringify(e)
}