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

class Users extends React.Component {

    state = {
        users: [],
        hasError: true
    }

    constructor() {
        super();
        // GET, PUT, POST, DELETE
        // axios.get('https://api.github.com/users1')
        //     .then((res) => {
        //         this.setState({ users: res.data });
        //     })
        //     .catch(err => {
        //         this.setState({ hasError: true });
        //     })
    }

    render() {
        const { users, hasError } = this.state;

        return <div>
            <h1 className="text-xl font-semibold">Users</h1>
            {hasError ? <Error /> : null}
            <div>
                {users.map(item => <UserItem key={item.id} user={item} />)}
            </div>
        </div>
    }
}

export default Users;
