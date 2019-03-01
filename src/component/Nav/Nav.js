import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

 function Nav(props){
    if(props.location.pathname === '/') {
    return (
        null
    )
    } else {
        return (
            <div>Nav
            <button>Home</button>
            <button>New Post</button>
            <button>logout</button>
            </div>
        )
    }
    
}

const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    }
}
// connect(mapStateToProps, Nav)



export default withRouter(Nav)