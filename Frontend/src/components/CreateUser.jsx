import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        email: '',
        fullname: '',
        password: '',
        users: [],

    }

    async componentDidMount() {
        this.getUsers();
        console.log(this.state.users);
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }

    onChangeemail = e => {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }
    onChangefullname = e => {
        console.log(e.target.value)
        this.setState({
            fullname: e.target.value
        })
    }
    onChangepassword = e => {
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/auth/signup', {
            email: this.state.email,
            fullname: this.state.fullname,
            password: this.state.password,
            
        });
        this.setState({ email: '' });
        this.setState({ fullname: '' });
        this.setState({ password: '' });
        this.getUsers();
    }

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.email}
                                    type="text"
                                    onChange={this.onChangeemail}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.fullname}
                                    type="text"
                                    onChange={this.onChangefullname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.onChangepassword}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.email}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
