var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda",
"baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var numIngred = ingredients.length;
var curIngred = 0;
while (curIngred < numIngred) {
  console.log(ingredients[curIngred]);
  ++curIngred;
}


// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; ++i) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of
//   ingredients backwards:
for (var i = ingredients.length; i >= 0; --i) {
  console.log(ingredients[i]);
}
