class Account{
    constructor (id,amount) {
        this.eid = id
        this.eamount = amount
    }
}
class SA extends Account{
    constructor (name,mail,amount,id,address) {
        super(id,amount)
        this.ename = name
        this.email = mail
        this.eaddress = address
    }
}
let s1 = new SA("Kishore","kishore@gmail.com",400000,101,"Krishnagiri")
let s2 = new SA("Kumar","kumar@gmail.com",300000,102,"Krishnagiri")
console.log(s1)
console.log(s2)

