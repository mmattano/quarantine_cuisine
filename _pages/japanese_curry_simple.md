---
title: Japanese Curry - simple
layout: single
permalink: recipes/curries/japanese_curry_simple
sidebar:
  nav: "sitemap"
toc: true
---

- Oil
- <span id="multiply"></span> onion
- 3 medium carrots
- 1.5 large potatoes
- 3 cloves of garlic
- Water
- 3 S&B Golden Curry mix cubes
- ½ cup of frozen peas
- Salt
- Pepper
- Udon noodles or rice

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
<body>

Number of portions:

<div class="slidecontainer">
  <input type="range" min="1" max="10" value="2" class="slider" id="myRange">
  <p>Portions: <span id="demo"></span></p>
</div>

<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var multiply = document.getElementById("multiply");
multiply.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
slider.oninput = function() {
  multiply.innerHTML = this.value;
}
</script>

Cut the onion into slices from tip to toe. Peel the carrots and the potatoes and cut 
them into thumb tip sized cubes. Heat up some oil in a large pan and add the onions. 
Fry until they start to turn translucent and then add the carrots and potatoes. 
Grate the garlic and add as well. Cook everything until things start turning soft, 
about 10 minutes. Cover with water and crumble in the curry mix cubes. Start preparing 
the sides; boil some udon noodles or cook some rice. Add the chickpeas and boil down 
until the mix starts to thicken lightly. Add the frozen peas and cook for another 
few minutes. Serve and enjoy! Optionally sprinkle with sesame seeds or chopped scallion.
