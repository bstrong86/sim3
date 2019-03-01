import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password:''
        }
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    async register(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try{
            let res = await axios.post('/', user)
            res.status(200).send()


        }catch(err){}
    }

    render() {
        const {username, password} = this.state
        return (
        <div>
            <input value ={username} onChange={ e => this.handleChange('username', e.target.value)}/>
            <input value ={password} onChange={ e => this.handleChange('password', e.target.value)}/>
            <button>Login</button>
            <button>Register</button>
            Auth Controller
        </div>
        )
    }

}

export default Auth