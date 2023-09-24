const Card  = (rests) =>{
    console.log(rests)
    return <div className="card">
        <h2>{rests.rest.name}</h2>
        <h2>{rests.rest.location}</h2>
        <h2>{rests.rest.pricing}</h2>
        {rests.rest.times === 3  && <div className="vis"></div>}
        {rests.rest.times === 4 && <div className="novis"></div>}
    </div>
}

export default Card;