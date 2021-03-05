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
