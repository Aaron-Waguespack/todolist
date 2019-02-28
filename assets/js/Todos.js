//check off specific Todos by clicking
//if li is grey, turn it black else turn it grey
//using .on to affect items created after the page loads (new todos)
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
// code below is what the toggle and class replaces.
//****************************************
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}		
// 	else {
// 		$(this).css({
// 			color:"gray",
// 			textDecoration:"line-through"
// 		});
// 	}
// });
//*****************************************

//click on X to delete todo
//stopPropagation stops events from rolling up the tree (contains it)
//using .on to affect items created after the page loads (new todos)
$("ul").on("click", "span", function(event){
// .parent() removes the <li> parent of the <span>
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Add Todos
$("input[type='text']").keypress(function(event){
	// grabing noew todo text after enter is hit and clears input
	if(event.which === 13){
	  var todoText = $(this).val();
	  $(this).val("");
	 // create a new <li> and add to <ul>
	 //append takes a string of html and addes the elements to what we selected.
	 $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todoText +"</li>")
	}
});

// plus toggle
$(".fa-plus").click(function(){
	//.fadeToggle() fades in / out
	$("input[type='text']").fadeToggle();
})