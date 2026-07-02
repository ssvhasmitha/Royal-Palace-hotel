// Welcome Message
window.onload = function () {
    console.log("Welcome to Royal Palace Hotel!");
};

// Booking Form Validation
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    alert("Thank you! Your room booking request has been submitted.");

    return true;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});