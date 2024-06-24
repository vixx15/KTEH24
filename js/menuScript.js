let myOrders = document.getElementById("myOrders");
console.log(myOrders);

let products = document.getElementsByClassName("product");
console.log(products);

let labels = document.getElementsByTagName("label");
console.log(labels);

let userInfo = document.querySelector("#userInfo");
console.log(userInfo);

let parRacun = document.getElementById("parRacun");

console.log("Parent node myOrders: ", myOrders.parentNode)
console.log("Child node myOrders", myOrders.childNodes)

console.log("myOrders next sibling: ", myOrders.nextElementSibling);
console.log("myOrders previous sibling ", myOrders.previousSibling)

let coffee = document.querySelector("#Cappucino").parentNode.childNodes[1];
coffee.textContent = "Coffee"

let title = document.querySelector(".flexColumn > .titleText");
title.innerHTML = "<h1>Place an order</h1>"


let forme = document.forms;
console.log(forme)

let forma = document.forms["forma"]
console.log(forma)

forma.addEventListener("submit", function (e) {
   e.preventDefault();
   let vrednost = forma["kreditna"].checked
   console.log(vrednost)
})

//KRAJ 4. casa
const arr = [3, 5, 7];
arr.greeting = 'hello';

for (let i in arr) {
   console.log(i);
}

for (let i of arr) {
   console.log(i);
}

let increaseBtns = document.querySelectorAll(".increaseBtn")
Array.from(increaseBtns).forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
      quantity = quantity + 1
      btn.parentNode.querySelector(".quantity").textContent = quantity + ""
   })
})

let decreaseBtns = document.querySelectorAll(".decreaseBtn")
Array.from(decreaseBtns).forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
      if (quantity > 0) {
         quantity -= 1
         btn.parentNode.querySelector(".quantity").textContent = quantity + ""
      }
   })
})

const changeColor = () => document.querySelector('#cheesecake .orderBtn').style.backgroundColor = 'lightblue';
//changeColor();

var billAmount = 0;

const orderButtons = document.querySelectorAll('.orderBtn');
orderButtons.forEach(button => {
   button.addEventListener('click', handleOrder);
});


function handleOrder(event) {
   const productElement = event.target.closest('.product');
   const productName = productElement.querySelector('h1').innerText;
   const quantityElement = productElement.querySelector('.quantity');
   const quantity = quantityElement.innerText;
   const price = productElement.querySelector(".cena").textContent;

   if (parseInt(quantity) > 0) {
      // Get the current orders
      const ordersTextarea = document.getElementById('myOrders');
      const currentOrders = ordersTextarea.value;
      const newOrder = `${productName}: ${quantity} x ${price}  -  ${quantity * parseInt(price)} RSD\n`;
      billAmount = billAmount + quantity * parseInt(price);
      parRacun.textContent = `Your bill: ${billAmount} RSD`
      ordersTextarea.value = currentOrders + newOrder;
      quantityElement.innerText = '0';
   } else {
      alert(`Please select a quantity for ${productName}`);
   }
}
//Kao povratna vrednost
function quantityControl() {
   // Increase function
   function increase(quantity) {
      quantity++;
      return quantity;
   }

   // Decrease function
   function decrease(quantity) {
      if (quantity > 0) {
         quantity--;
      }
      return quantity

   }

   return {
      increase,
      decrease
   };
}

qC=quantityControl()

/*let increaseBtns = document.querySelectorAll(".increaseBtn")
Array.from(increaseBtns).forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
      quantity = qC.increase(quantity)
      btn.parentNode.querySelector(".quantity").textContent = quantity + ""
   })
})

let decreaseBtns = document.querySelectorAll(".decreaseBtn")
Array.from(decreaseBtns).forEach(function (btn) {
   btn.addEventListener("click", function (e) {
      let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
      quantity = qC.decrease(quantity)
      btn.parentNode.querySelector(".quantity").textContent = quantity + ""
   })
})*/

document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('forma');

   form.addEventListener('submit', function(event) {
       event.preventDefault(); 
       handleFormSubmit();
   });
});

function handleFormSubmit() {
   const fullName = document.getElementById('ime_prezime').value;
   const contact = document.getElementById('kontakt').value;
   const paymentType = document.querySelector('input[name="placanje"]:checked').id;
   const orders = document.getElementById('myOrders').value;

   console.log('Full Name:', fullName);
   console.log('Contact:', contact);
   console.log('Payment Type:', paymentType);
   console.log('Orders:', orders);
   
   alert(`Order placed successfully for ${fullName}\nTotal: ${billAmount}\nPayment type: ${paymentType} RSD}!`);
}

