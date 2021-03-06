---
title: Mapo Tofu
layout: single
permalink: recipes/rice/mapo_tofu
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
  background: #cfcfcf;
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
  background: #ffffff;
  border-color: #4d4d4d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ffffff;
  border-color: #4d4d4d;
  cursor: pointer;
}
</style>

[![<img src="Figures/Mo_mapo.jpg" width="200"/>]](Figures/Mo_mapo.jpg)


[![<img src="Figures/Mapo.jpg" width="200"/>]](Figures/Mapo.jpg)

## Ingredients

<div class="slidecontainer">
  <label for="serving">A Number of portions: <span id="multiply"></span></label>
  <input type="range" min="1" max="10" value="2" class="slider" id="servingInput">

  <div class="Recipe-IngredientList">
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="2"> - <span></span> tablespoons vegetable oil</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.75"> - <span></span> tablespoons Sichuan peppercorns (coarsely ground, reserve a bit for garnish at the end)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1.5"> - <span></span> tablespoons ginger (finely minced)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1.5"> - <span></span> tablespoons garlic (finely minced)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.5"> - <span></span> tablespoons fermented black beans</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="2.5"> - <span></span> Thai bird chilies (thinly sliced)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="55"> - <span></span> g shiitake mushrooms (finely chopped)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1"> - <span></span> tablespoons spicy bean sauce (depending on your desired salt/spice levels)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1"> - <span></span> tablespoons light soy sauce</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.5"> - <span></span> tablespoon chili oil</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="80"> - <span></span> mL water (or vegetable or mushroom broth)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="1"> - <span></span> teaspoons cornstarch (mixed with half the amount of water)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="200"> - <span></span> g silken tofu (or soft tofu, cut into 1-inch cubes)</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.125"> - <span></span> teaspoons sesame oil</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.125"> - <span></span> teaspoons sugar</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="0.5"> - <span></span> scallion (finely chopped)</div>
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

## Instructions

First, cube the tofu and then blanch it.
In a wok over medium low heat, add the vegetable oil and ground Sichuan peppercorns (remember to reserve some for garnishing the dish at the end).
Cook for 30 seconds, and add the ginger. Cook for another 1 minute and add the garlic. Cook for another 1 minute. Add the black beans, and chilies. Cook for another 1-2 minutes.
Turn up the heat to medium, and add the mushrooms. Cook until the mushrooms are cooked down and slightly caramelized, about 5 minutes.
Add the spicy bean sauce, chili oil and light soy sauce to the mixture and stir it in well. Turn up the heat to high, and add the water or broth and stir. Bring the mixture up to a simmer, and allow to bubble for 1 minute.
Stir the cornstarch and water mixture to make sure the cornstarch is dissolved, and add it to the sauce. Allow the sauce to thicken (if it gets too thick, splash in more water or stock). If the sauce is too thin, make a little more cornstarch slurry and add it in. There will be variations depending on how high your heat is.
Add the tofu to the wok and gently toss the tofu in the sauce. Allow the tofu to simmer for 3-5 minutes, and then add the sesame oil, sugar, and scallions.
Give everything a final stir, and taste for seasoning (you likely won’t have to add any additional salt, as the spicy bean sauce and fermented black beans are quite salty). Serve over rice, garnished with a last sprinkle of Sichuan peppercorn powder.

Adapted from [this recipe](https://thewoksoflife.com/vegan-mapo-tofu/)
