$(document).ready(function(){
	removePaddingWrapper();
});

function removePaddingWrapper(){
	var container = $(".container.contextual-links");
	console.log(container.length)
console.log(container.length > 0)
	if(container.length > 0){
		console.log(container.next(".container"))
		container.next(".container").find(".wrapper").css("padding-top", "0px");
	}
}