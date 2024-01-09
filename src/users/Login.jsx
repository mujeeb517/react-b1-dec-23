import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../util/axios';
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [hasErr, setErr] = useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (emailRef) {
            emailRef.current.focus();
        }
    }, []);

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onLogin = async (e) => {
        try {
            e.preventDefault();

            const res = await axios().post('/api/users/signin', user);
            localStorage.setItem('token', res.data.token);
            // redirect
            navigate('/products');
        } catch (err) {
            setErr(true);
        }
    };

    return (<div className="m-4">
        <ShouldRender cond={hasErr}>
            <Error msg="Wrong username or password" />
        </ShouldRender>
        <h1 className="font-bold text-lg">Login</h1>
        <form method="POST" onSubmit={onLogin}>
            <div className="mt-2 p-2">
                <input ref={emailRef} onChange={onInputChange} name="email" className="p-2 border rounded" type="text" placeholder="Email" />
            </div>
            <div className="mt-2 p-2">
                <input onChange={onInputChange} name="password" className="p-2 border rounded" type="password" placeholder="Password" />
            </div>
            <div className="mt-2 p-2">
                <button className="bg-orange-500 text-white p-2 border rounded hover:bg-orange-400" type="submit">Login</button>
            </div>
        </form>
    </div >);
}

export default Login;