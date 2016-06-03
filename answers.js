function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<ul><li>Javascript can change HTML by accessing DOM</li><li>Javascript can react to events happening in a page</li></ul>";
}

var A34 = document.getElementsByClassName("q34-answer");

function answer_3() {
  A34[0].innerHTML = "<ul><li>Parent - A node directly above a node</li><li>Child - Nodes one level directly below</li><li>Sibling - Nodes at the same level (same parent node)</li><li>Descendant - A set of nodes any number of levels below another node</li><li>Ancestor - A set of nodes above a node in a tree</li></ul>";
}

function answer_4() {
  A34[1].innerHTML = "<ul><li>document.getElementById() - Returns an element with a given ID NAME<br>Duplicate ID is not allowed in the HTML specification</li><li>document.getElementsByClassName() - Get a list of elements based on the class name(many elements are returned)</li><li>document.getElementsByName() - Get a list of elements based on the name(many elements are returned)<br>Name is generally used with input tag</li><li>document.getElementsByTagName() - Get a list of elements with the input tag name(many elements are returned)</li></ul>";
}

$('a').click(function() {
 $('a').text("Answer5");
})

$('.item').click(function() {
 $('.item').animate({fontSize:"3em"});
})

$('div.demo').dblclick(function() {
 $('div.demo').addClass("blue");
})