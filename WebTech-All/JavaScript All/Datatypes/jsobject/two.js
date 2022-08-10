let products = {
    p_id: "E101",
    p_name:"Samsung Galaxy 8",
    price:34000,
    discount:false,
    stock:'Not Available',
    loc:['KRG','BLG','HSR','SLM','VPM']

}
console.log(products.price)
for(Props in products){
    console.log(products[Props])

}
