
let cars = [{ brand: "Maruthi", model: "Dzire", color: 'white', price: 1000000 },
{ brand: "Toyota", model: "Fortuner", color: 'black', price: 3000000 },
{ brand: "Maruthi", model: "A-Star", color: 'red', price: 300000 },
{ brand: "Tata", model: "Altroz", color: 'skyblue', price: 1600000 },
{ brand: "RR", model: "ghost", color: 'white', price: 7000000 },
{ brand: "Hyndai", model: "verna", color: 'white', price: 1200000 },
{ brand: "Maruthi", model: "Wagonr", color: 'blue', price: 800000 },
{ brand: "kia", model: "carnival", color: 'purple', price: 800000 },
{ brand: "Mahindra", model: "XUV700", color: 'green', price: 800000 },



]

//display white/red/skyblue
let new_Cars = []
/*for (car of cars) {
    if (car.color === 'skyblue') {
        new_Cars.push(car)
    }
} 
console.log(new_Cars)*/
for (car of cars) {
    if (car.price != 7000000) { //choose either <=,>=,color,range
        new_Cars.push(car)
    }

}
console.log(new_Cars)
//display price below 10 lacs
