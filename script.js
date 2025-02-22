function getFormvalue(event) {
    //Write your code here
	// Get form reference
        const form = document.getElementById('form1');

        // Add event listener to the form
       

        // Function to retrieve form values and show alert
        // function getFormvalue(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Retrieve input values
            const firstName = document.querySelector('input[name="fname"]').value;
            const lastName = document.querySelector('input[name="lname"]').value;
             form.addEventListener('submit',()=>{
								     alert(${firstName} ${lastName})};
            // Display the full name using alert()
            // alert(${firstName} ${lastName});
        

}
