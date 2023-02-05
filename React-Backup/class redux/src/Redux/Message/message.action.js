//action types 
const GM = "GM"
const GN = "GN"

//actions
let gmAction = () => {
    console.log("Breakfast - gmAction")
    return { type: GM }
}
let gnAction = () => {
    console.log("Dinner - gnAction")
    return { type: GN }
}
export { GM, GN, gmAction, gnAction }

// wt is action?
// action is a normal function, returns actionable Object

