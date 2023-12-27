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

class Users extends React.Component {
    state = {
        users: [],
        hasError: false,
        loading: true
    }

    constructor() {
        super();

        // this.setState({ loading: true });
        // GET, PUT, POST, DELETE
        setTimeout(() => {
            axios.get('https://api.github.com/users')
                .then((res) => {
                    this.setState({ users: res.data });
                })
                .catch(err => {
                    this.setState({ hasError: true });
                })
                .finally(() => {
                    this.setState({ loading: false });
                });
        }, 2000);
    }

    render() {
        const { users, hasError, loading } = this.state;

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
}

export default Users;
