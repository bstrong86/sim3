import React, {Component} from 'react'



class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state ={
            checkbox: true,
            postList: []
        }
    }



    handleCheckbox = () => {
        if(this.state.checkbox){
            this.setState({            
               checkbox: false
            })
        } else {
            this.setState({
                checkbox:true
            })
        }
    }
    
    render() {
        console.log(this.state.checkbox)
        // mappedList = this.state.postList.map(post) => {
        //     return(
                
        //     )
        // }
        return (
        <div>Dashboard Controller
             <input placeholder='Search'></input>
             <button>Search</button>
             <button>Reset</button>
             <input type='checkbox' onClick={this.handleCheckbox}></input>

        </div>
        )
    }

}

export default Dashboard