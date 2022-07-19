class savingsaccount{
    minbal = 1000
    openAccount(){
        console.log("Account opened successfully")
    }
    deposit(){
        console.log("Bhaiya please deposit 1000")
    }
    withdrawl(){
        console.log('Please dont withdraw')
    }
    getstat(){
        console.log('Pls wait')
    }
    getbal(){
        console.log('Bhaiya Stat is only 1000')
    }
    closeaccount(){
        console.log("Cant maintain")
    }
}
let c1 = new savingsaccount()
let c2 = new savingsaccount()
console.log(c1.minbal)
c1.openAccount()
c1.deposit()
c1.withdrawl()
c1.getstat()
c1.getbal()
c1.closeaccount()