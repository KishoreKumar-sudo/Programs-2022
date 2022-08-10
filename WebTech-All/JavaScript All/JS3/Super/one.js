class Account{
    constructor () {
        console.log("Account Got Hacked")
    }
}
class SA extends Account{
    constructor () {
        super()
        console.log("SA-Constructor-Method")
    }
}
    class CA extends Account{
        constructor () {
            super()
            console.log("CA-Constructor-Method")
        }  
}
new SA()
new CA()
