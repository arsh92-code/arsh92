document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let pin = document.getElementById("pin").value;

    if (email === "" || pin === "") {
        alert("Please fill in all fields.");
        return;
    }

    
    alert("Login successful!");
});
