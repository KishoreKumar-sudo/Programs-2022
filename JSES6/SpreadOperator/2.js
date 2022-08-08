
let user = {
    id: 101,
    name: "Kishore",
    email: "rahul@ibm.com"
}
let detaisl = {
    email: "kishore97@gmail.com",
    sal: 25000
}
let user_Details = { ...user, ...detaisl }
console.log(user_Details)
