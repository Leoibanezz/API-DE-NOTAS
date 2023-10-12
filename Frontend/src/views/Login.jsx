import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const URL = "http://localhost:4000/api/auth/signin"
    const login = async () => {
        try {
            const header = {'Content-Type': 'application/json'};   
        const {data} = await axios.post(URL, {email, password},{header} )
        if (data.authToken) {
            localStorage.setItem("authToken",data.authToken)
            navigate("/create")
            
        };
            
        } catch (error)  {
            console.log(error)
            
        }
        

    }
        

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return <div className="container text-center">
        <main className="form-signin w-100 m-auto">

        <h1 className="h3 my-3 fw-normal">Note App</h1>

        <form className="my-5 p-5" onSubmit={handleSubmit}>
            <h3 className="h3 mb-3 fw-normal">Inicia Sesión</h3>
            <div className="form-floating">
                <input value={email} type="email" className="form-control"
                onChange={handleEmail}
                id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input value={password} type="password" className="form-control" 
                onChange={handlePassword} 
                id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit" >Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">@Leonardo Ibañez@Harold Garcia@Robert Muñoz</p>
        </form>
    </main>
    </div>
}