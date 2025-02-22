function getFormvalue() {
    //Write your code here
	// Get form reference
        const form = document.getElementById('form1');

            const firstName = document.getElementByid('firstName');
            const lastName = document.getElementByid('lastName');
             form.addEventListener("submit",(e)=>{
				  e.preventDefault()
				alert(${firstName} ${lastName})};
            // Display the full name using alert()
            // alert(${firstName} ${lastName});
        

}
