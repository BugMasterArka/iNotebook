import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    let navigate = useNavigate();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // ssave auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/');
            props.showAlert("Sccessfully logged in","success");
        }
        else{
            // alert("invalid creds");
            props.showAlert("Invalid credentials","danger");
        }
    };

    const onChange = (event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value});
    }

    return (
        <div className='mt-2'>
            <h2>Login to Continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login