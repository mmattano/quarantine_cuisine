---
title: Japanese Curry - simple
layout: single
permalink: recipes/curries/japanese_curry_simple
sidebar:
  nav: "sitemap"
toc: true
---


### Ingredients

<!-- https://codepen.io/Erilan/pen/qQWpqa -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<style>
.Recipe-IngredientList {
  width: 400px;
  border-radius: 3px;
  padding: 5px;
  margin-top: 5px;
}
.Recipe-Ingredient {
  padding: 5px 0;
}
.Recipe-Ingredient:last-child {
  border-bottom: none;
}
.Recipe-Ingredient span {
  font-weight: 600;
}
</style>

A Number of portions:


<div>
  <label for="serving">Portions :</label>
  <input type="number" id="servingInput" value="1">
  <button class="js-decreaseService">-</button>
  <button class="js-increaseService">+</button>

  <div class="Recipe-IngredientList">
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1"> - <span></span> tbs oil</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1"> - <span></span> onion</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="3"> - <span></span> medium carrots</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1.5"> - <span></span> large potatoes</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="3"> - <span></span> gloves of garlic</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="3"> - <span></span> S&B Golden Curry mix cubes</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.5"> - <span></span> cup of frozen peas</div>
    <div class="Recipe-Ingredient js-recipeIngredient"> - some water, salt and peper</div>
  </div>
</div>


<p>- udon noodles or rice</p>



<script>
// Recipe calculator with jquery
var computeServing = function(serving) {
  $('.js-recipeIngredient').each(function(index, item) {
    $(item).children('span').html($(item)[0].dataset.basevalue * serving)
  })
}
$('#servingInput').on('change', function() {
  computeServing($(this).val())
})
$('.js-decreaseService').on('click', function() {
  var currentServing = $('#servingInput').val()
  $('#servingInput').val(currentServing - 1)
  computeServing(currentServing - 1)
})
$('.js-increaseService').on('click', function() {
  var currentServing = $('#servingInput').val()
  $('#servingInput').val(parseInt(currentServing) + 1)
  computeServing(parseInt(currentServing) + 1)
})
computeServing(1)
</script>



Cut the onion into slices from tip to toe. Peel the carrots and the potatoes and cut
them into thumb tip sized cubes. Heat up some oil in a large pan and add the onions.
Fry until they start to turn translucent and then add the carrots and potatoes.
Grate the garlic and add as well. Cook everything until things start turning soft,
about 10 minutes. Cover with water and crumble in the curry mix cubes. Start preparing
the sides; boil some udon noodles or cook some rice. Add the chickpeas and boil down
until the mix starts to thicken lightly. Add the frozen peas and cook for another
few minutes. Serve and enjoy! Optionally sprinkle with sesame seeds or chopped scallion.
