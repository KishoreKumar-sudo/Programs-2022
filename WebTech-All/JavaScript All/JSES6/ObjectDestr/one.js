
let contact = {
    name: {
        first_Name: "Rahul",
        last_Name: "Gandhi"
    },
    id: 101,
    loc: ['Wayanad', 'New Delhi'],
    sal: 45000
}
//console.log(contact.name.last_Name) //not a good practice(but also a good method)
let { name } = contact
let { first_Name } = name
console.log(first_Name)
let {id} = contact
console.log(id);
let {loc} = contact
console.log(loc);
let {sal} = contact
console.log(sal);