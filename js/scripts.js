// BUSINESS LOGIC -----------------------------------------

//Empty variables for form selections
var meatInput = [];
var toppingsInput = [];

// Pizza Constructor
function Pizza(size, meat, toppings) {
  this.size = size,
  this.meat = meat,
  this.toppings = toppings,
  this.price = 0,
  this.address = ""
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
    if (this.meat[i] === " Bacon"){
      this.price += 3;
    } else {
      this.price += 2;
    }
  };

  for (var i=0; i< this.toppings.length; i++) {
    if (this.toppings[i] === " Extra Cheese"){
    this.price += 1;
    } else {
    this.price += 0.5;
    }
  };

  return this.price
};

// USER LOGIC ---------------------------------------------

// Pizza Builder Form
$(document).ready(function() {
  $("form#pizza-builder").submit(function(event) {
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

    $("#size-display").text(newPizza.size);
    $("#meat-display").text(newPizza.meat);
    $("#toppings-display").text(newPizza.toppings);
    $("#cost-display").text(newPizza.price.toFixed(2));
    $(".result").show();
    $("#pizza-builder")[0].reset();

    console.log(newPizza);
  });

// Continue to Delivery Button
  $("#continue").click(function(event) {
    event.preventDefault();
    $(".address").show();
  });

// Place Order Button
  $("form#user-address").submit(function(event) {
    event.preventDefault();
    var userAddress = $("input#user-address").val();
    var userCity = $("input#user-city").val();
    var userZip = $("input#user-zip").val();
    // newPizza.address = userAddress + ", " + userCity + ", " + userZip
    $(".order-entry").hide();
    $(".result").hide();
    $(".address").hide();
    $("#address-display").text(userAddress);
    $(".order-confirmation").show();
    $("#user-address")[0].reset();

  });
});
