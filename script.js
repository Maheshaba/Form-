document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
         let message = document.getElementById("message");
         

    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
        document.getElementById("myForm").reset(); // Reset the form after submission
    }
});
