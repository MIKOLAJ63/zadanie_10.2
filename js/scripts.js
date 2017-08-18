//scripts.js
//dla parzystych red
$(function(){
	console.log('DOM loaded - you can have fun');
});

$(document).ready(function() {
	
span.each(function(index, element) {
	if((index+1) % 2 == 0) {
		$(element).css('color', 'red');
	};
});
});
var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});

//scripts.js
//dla nieparzystych red
$(document).ready(function() {
  
var span = $("span");
$("span:odd").css('color', 'red');

var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});