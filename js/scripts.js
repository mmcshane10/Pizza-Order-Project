// BUSINESS LOGIC -----------------------------------------

//Empty Arrays for form selections
var meatInput = [];
var toppingsInput = [];

// Pizza Constructor
function Pizza(size, meat, toppings) {
  this.size = size,
  this.meat = meat,
  this.toppings = toppings,
  this.price = 0
};

Pizza.prototype.priceCalculator = function() {
  if (this.size === "Small"){
    this.price += 12;
  } else if (this.size === "Medium"){
    this.price += 15;
  } else if (this.size === "Large"){
    this.price += 18;
  } else {
    this.price += 20;
  }

  for (var i=0; i< this.meat.length; i++) {
    if (this.meat[i] === "Bacon"){
      this.price += 3;
    } else {
      this.price += 2;
    }
  };

  for (var i=0; i< this.toppings.length; i++) {
    if (this.toppings[i] === "Extra Cheese"){
    this.price += 1;
    } else {
    this.price += 0.5;
    }
  };

  return this.price;
};

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

    newPizza.priceCalculator();

    $("#pizza_builder")[0].reset();

    console.log(newPizza);
  });
});
