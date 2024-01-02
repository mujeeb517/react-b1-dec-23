// List of users 
// from an api
// Create component
// fetch data
// save the state
// render the data
// container & presentation
// error handling 
// conditional rendering
// Small lib to build UI
// axois
import React from "react";
import axios from 'axios';
import UserItem from "./UserItem";
import Error from "./util/Error";
import Loader from "./util/Loader";
import ShouldRender from "./util/ShouldRender";
import { useState } from "react";
import { useEffect } from "react";

function Users() {

    const [users, setUsers] = useState([]);
    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://api.github.com/users')
                .then((res) => {
                    setUsers(res.data);
                })
                .catch(err => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 2000);
    }, []);

    return <div>
        <ShouldRender cond={loading}>
            <Loader />
        </ShouldRender>
        <ShouldRender cond={hasError}>
            <Error />
        </ShouldRender>
        <h1 className="text-xl font-semibold">Users</h1>
        <div>
            {users.map(item => <UserItem key={item.id} user={item} />)}
        </div>
    </div>
}

export default Users;
