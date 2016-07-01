$(document).ready(function(){
	removePaddingWrapper();
});

function removePaddingWrapper(){
	var container = $(".container.contextual-links");

console.log(container.length > 0)
	if(container.length > 0){

		container.next(".container").find(".wrapper").css("padding-top", "0px");
	}
}