---
title: Japanese Curry - simple
layout: single
permalink: recipes/curries/japanese_curry_simple
sidebar:
  nav: "sitemap"
toc: true
---
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #ffd4d4;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #b5fff8;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #f2f2f2;
  cursor: pointer;
}
</style>

<div class="slidecontainer">
  <label for="serving">A Number of portions: <span id="multiply"></span></label>
  <input type="range" min="1" max="10" value="2" class="slider" id="servingInput">

  <div class="Recipe-IngredientList">
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.5"> - <span></span> tbs Oil</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.5"> - <span></span> onion</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1.5"> - <span></span> medium carrots</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.75"> - <span></span> large potatoes</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1.5"> - <span></span> cloves of garlic</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1.5"> - <span></span> S&B Golden Curry mix cubes</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.25"> - <span></span> cup of frozen peas</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1"> - <span></span> pack of udon noodles or portions of rice</div>
    <div class="Recipe-Ingredient js-recipeIngredient"> - some water, salt and pepper</div>
  </div>
</div>

<!-- https://codepen.io/Erilan/pen/qQWpqa -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
var slider = document.getElementById("servingInput");

var multiply = document.getElementById("multiply");
multiply.innerHTML = slider.value;
slider.oninput = function() {multiply.innerHTML = this.value;}

// Recipe calculator with jquery
var computeServing = function(serving) {
  $('.js-recipeIngredient').each(function(index, item) {
    $(item).children('span').html($(item)[0].dataset.basevalue * serving)
  })
}
$('#servingInput').on('change', function() {
  computeServing($(this).val())
})
computeServing(2)
</script>
<p></p>


Cut the onion into slices from tip to toe. Peel the carrots and the potatoes and cut 
them into thumb tip sized cubes. Heat up some oil in a large pan and add the onions. 
Fry until they start to turn translucent and then add the carrots and potatoes. 
Grate the garlic and add as well. Cook everything until things start turning soft, 
about 10 minutes. Cover with water and crumble in the curry mix cubes. Start preparing 
the sides; boil some udon noodles or cook some rice. Boil down until the mix starts to 
thicken lightly. Add the frozen peas and cook for another few minutes. Serve and enjoy!
Optionally sprinkle with sesame seeds or chopped scallion.
