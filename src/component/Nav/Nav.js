import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function Nav(props){
    console.log(props)
    const {username, profile_pic} = props
    if(props.location.pathname !== '/') {
        return (
            <div>Nav
        <h3>{username}</h3>
        <img src={"https://robohash.org/P3X.png?set=set1&size=150x150"}/>
        <Link to='/'>
            <button>Home</button>
        </Link>
        <button>New Post</button>
            
        <button>logout</button>
        </div>
    )
    } else {
        return (
            null
         )
            
    }
    
}

function mapStateToProps(reduxState) {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    }
}



export default connect(mapStateToProps)(Nav)
