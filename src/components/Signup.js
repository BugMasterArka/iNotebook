import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name,email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }
        else{
            alert("invalid creds");
        }
    };

    const onChange = (event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} value={credentials.name} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={credentials.password} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} value={credentials.cpassword} required minLength={5}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup