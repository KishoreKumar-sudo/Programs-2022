
class Account {
    constructor(id, name, email,gender) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Email = email
        this.acc_Gender = gender
    }
    get_Account_Details() {
        return this.acc_Id + " : " + this.acc_Name + ":" + this.acc_Email + ":" + this.acc_Gender
    }
    get_Address() {
        return "My Address"
    }
}

class Savings_Account extends Account {
    constructor(id, name, email, amount,gender) {
        super(id, name, email,gender);
        this.acc_Amount = amount
    }
    get_Account_Bal() {
        return this.acc_Amount
    }
}
let sa1 = new Savings_Account(101, "Kishore", "kishore97@gmail.com", 25000, "male")

console.log(sa1.get_Account_Details())
console.log(sa1.get_Address())
console.log(sa1.get_Account_Bal())
//class Current_Account extends Account { }
