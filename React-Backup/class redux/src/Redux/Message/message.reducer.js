import { GM, GN } from './message.action'
let initialstate = {
    msg: "Hello,Kishore"
}
let messageReducer = (state = initialstate, action) => {
    console.log(action)
    // console.log(actiontype)
    console.log("Lunch - reducer")
    switch(action.type) {
        case 'GM':
            return{ msg:"Hello,Kishore! Gud Mrng"}
        case 'GN':
            return{ msg:"Hello,Kishore... Gud Nyt"}
        default:
                return state
    }
}
export { messageReducer }

//wt is reducer?
// reducer is pure function, always it takes two aruguments
/* 
        1.state
        2.action
 */