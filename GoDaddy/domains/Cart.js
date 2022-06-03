function Cart() {
    var cartvalue = parseInt(document.getElementById("select").value);
    var domainprice = parseInt(localStorage.getItem("price"));
    var domainname = localStorage.getItem("name")
    var totalprice = domainprice
    if (cartvalue == 29) {
        totalprice = domainprice + cartvalue;
    }
    else {
        totalprice = parseInt(totalprice)
    }
    console.log(totalprice)
    document.getElementById("spans").innerHTML = `You@${domainname}.io`
}
