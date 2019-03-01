import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {updateUser} from '../../ducks/reducer'


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

    login = async () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try{
            let res = await axios.post('/auth/login', user)
            this.props.updateUser(res.data)
            console.log(res.data)
            this.props.history.push('/dashboard')

        }catch(err){
            
        }
    }

    register = async () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try{
            let res = await axios.post('/auth/register', user)
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
            // alert('pick another name')


        }catch(err){}
    }

    render() {
        const {username, password} = this.state
        return (
        <div>
            <input value ={username} onChange={ e => this.handleChange('username', e.target.value)}/>
            <input type = 'password' value ={password} onChange={ e => this.handleChange('password', e.target.value)}/>
            <button onClick={this.login}>Login</button>
            
            <button onClick={this.register}>Register</button>
            
            
        </div>
        )
    }

}
const mapStateToProps = (reduxState) => {
    return {
        reduxState

    }
}
const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)