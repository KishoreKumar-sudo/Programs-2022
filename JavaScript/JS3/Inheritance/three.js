class Account{
    min_Bal = 486
}
class SA extends Account{
    min_Bal = 4860
}
class CA extends Account{
    min_Bal = 48600
}
let s1 = new SA()
console.log(s1.min_Bal)
let s2 = new CA()
console.log(s2.min_Bal)
let s3 = new Account()
console.log(s3.min_Bal)