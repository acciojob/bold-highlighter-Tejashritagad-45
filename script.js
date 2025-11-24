function highlight() {
    //Write your code here
	const highlighted = document.querySelectorAll("strong");
	highlighted.forEach(item=>{
		item.style.color="rgb(0,128,0)";
});


}


function return_normal() {
    //Write your code here
	const highlighted = document.querySelectorAll("strong");
	highlighted.forEach(item=>{
		item.style.color="rgb(0,0,0)";
});
	
    
}
