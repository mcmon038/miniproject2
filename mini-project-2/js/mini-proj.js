$(document).ready(function () {

$(".button").click(function() {
	$(".button").hide("slow");
	$(".ex_machina").hide("slow")
	$(".container-2").slideToggle("linear");
	$(".ava").animate({bottom:'101%'});
	$(".rectangle").animate({bottom:'3%'});


});
});