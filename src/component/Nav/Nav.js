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
        <img src={profile_pic}/>
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
