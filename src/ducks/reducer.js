const initialState = {
    id: 0,
    username: '',
    profile_pic:''
}

const RETURN_STATE='RETURN_STATE'

export default function reducer(state = initialState, action){
    const {type, payload} = action
   switch(type) {
       case RETURN_STATE:
       return {state}
   } 
}