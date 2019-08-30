// BUSINESS LOGIC -----------------------------------------

// Pizza Constructor
function Pizza(size, meat, toppings) {
  this.size = size,
  this.meat = meat,
  this.toppings = toppings,
  this.price = 0
};

var meatInput = [];
var toppingsInput = [];

// USER LOGIC ---------------------------------------------

// Form
$(document).ready(function() {
  $("form#pizza_builder").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("input:radio[name=pizza-size]:checked").val();

    $("input:checkbox[name=toppings-meat]:checked").each(function(){
      var userMeatInput = $(this).val();
      meatInput.push(userMeatInput);
    });

    $("input:checkbox[name=toppings-additional]:checked").each(function(){
      var userToppingsInput = $(this).val();
      toppingsInput.push(userToppingsInput);
    });

    var newPizza = new Pizza(sizeInput, meatInput, toppingsInput);

    console.log(newPizza);
  });
});
