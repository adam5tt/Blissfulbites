// Function to handle recipe search notification
function searchRecipes() {
    let input = document.getElementById("recipeSearch").value.toLowerCase();
    let notification = document.getElementById("searchNotification");


    if (input.length > 0) {
        notification.style.display = "block"; // Show alert

        // Fade out after 3 seconds and clear input
        setTimeout(() => {
            notification.style.display = "none";
            document.getElementById("recipeSearch").value = ""; // Clear input AFTER alert fades
        }, 3000);
    }
}

// Function to handle "View Recipe" button notifications
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".view-recipe");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let recipeDiv = button.closest(".recipe"); // Find the closest recipe container

            // Check if a notification already exists in this recipe
            if (!recipeDiv.querySelector(".recipe-notification")) {
                // Create a new notification
                let notification = document.createElement("div");
                notification.className = "alert alert-info text-center mt-3 recipe-notification";
                notification.innerText = "🍰 Recipe coming soon!";

                // Append the notification to the recipe
                recipeDiv.appendChild(notification);

                // Removes the notification after 3 seconds
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;

        alert(`Thank you for contacting us, ${firstName} ${lastName}. We have received your request.`);

        this.reset(); // Resets the form after submission
    });
});

document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let username = document.getElementById("LoginUsername").value;
    let password = document.getElementById("LoginPassword").value;
    let message = document.getElementById("LoginMessage");

    if (username && password) {
        message.textContent = "You have now logged in!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter both username and password";
        message.style.color = "red";
    }
});

document.getElementById("RegisterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let username = document.getElementById("RegisterUsername").value;
    let password = document.getElementById("RegisterPassword").value;
    let message = document.getElementById("message"); // Select the message div

    if (username && password) {
        message.textContent = "You have now registered!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter both username and password";
        message.style.color = "red";
    }

    // Show the message for 3 seconds, then hide it
    setTimeout(() => {
        message.textContent = "";
    }, 3000);
});

