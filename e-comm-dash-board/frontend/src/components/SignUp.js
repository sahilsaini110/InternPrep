import React, {useState} from "react";

const SignUp = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const collectData = ()=>{
        console.log(name, email, password)
    }

    return (
        <div className="register">
            <h1>SignUp kro bhai</h1>
            <input className="inputbox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name"/>
            <input className="inputbox" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email"/>
            <input className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="enter password"/>
            <button onClick={collectData} type="submit"> SignUp</button>
        </div>
    )
}

export default SignUp;