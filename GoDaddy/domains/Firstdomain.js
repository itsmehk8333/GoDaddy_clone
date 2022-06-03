
function values(){
   
    var inputvalue= document.getElementById("input").value;
    var price=3799;
    console.log(inputvalue)
    async function check(){
    var data = await fetch(`http://localhost:8000/io?name=${inputvalue}`);
    var alldata = await data.json();
if(alldata.length > 0){
  document.getElementById("available-p").innerText = `${inputvalue}.io is not available`
  document.getElementById("available-p").style.color= "red"
}


else{
 document.getElementById("available-p").innerHTML = `
 <p>${inputvalue}.io is  available 
 <span class="span">3,799</span> rs per year 
 </p>
<a href="Cart.html" ><button class="cart">Add to cart</button></a>
 `;
 document.getElementById("available-p").style.color= "green"
}
}
check()

localStorage.setItem("domain","io");
localStorage.setItem("price",price);
localStorage.setItem("name",inputvalue)
}

