function fullcart() {
    var name = localStorage.getItem("name");
    var domain = localStorage.getItem("domain");
    var registration = localStorage.getItem("price");
    document.getElementById("h5").innerText = name + "." + domain;
    var yearsofregis = parseInt(document.getElementById("regisyear").value);
    var totalregistration = (registration * yearsofregis);
       document.getElementById("Totalprice").innerText  = totalregistration + ".00 Rs";
       var monthsofemail= document.getElementById("email-select").value;
  var emailprice = 29;
  var totalemailprice = emailprice * monthsofemail;
  document.getElementById("total-email-price").innerText = totalemailprice +".00 Rs"
  var completeprice = parseInt(totalregistration + totalemailprice);
  document.getElementById("totlaprices").innerText = completeprice + ".Rs";

}

