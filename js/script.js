// Get the contact form and feedback area
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// Validate the form when the user clicks Submit
contactForm.addEventListener("submit", function (event) {

    // Stop the form from reloading or being submitted to a server
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if the name is empty
    if (name === "") {
        formFeedback.textContent = "Please enter your name.";
        return;
    }

    // Check if the message is empty
    if (message === "") {
        formFeedback.textContent = "Please enter your message.";
        return;
    }

    // Check if the email has a valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        return;
    }

    // Display a validation summary
    formFeedback.textContent =
        "Your information has been validated successfully. " +
        "Name: " + name +
        " | Email: " + email +
        " | Message: " + message;
});
// Get the theme button
const themeButton = document.getElementById("themeButton");

// Switch between light and dark mode
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});
// Get the skills filter elements
const skillSearch = document.getElementById("skillSearch");
const resetSkills = document.getElementById("resetSkills");
const noSkillsMessage = document.getElementById("noSkillsMessage");
const skillCards = document.querySelectorAll(".skill-card");

// Filter skills as the user types
skillSearch.addEventListener("input", function () {

    const searchText = skillSearch.value.toLowerCase().trim();
    let visibleSkills = 0;

    skillCards.forEach(function (card) {

        const skillName = card.querySelector("h3").textContent.toLowerCase();

        if (skillName.includes(searchText)) {
            card.style.display = "block";
            visibleSkills++;
        } else {
            card.style.display = "none";
        }
    });

    // Show a message if nothing matches
    if (visibleSkills === 0) {
        noSkillsMessage.textContent = "No skills match your search.";
    } else {
        noSkillsMessage.textContent = "";
    }
});

// Reset the skills
resetSkills.addEventListener("click", function () {

    skillSearch.value = "";

    skillCards.forEach(function (card) {
        card.style.display = "block";
    });

    noSkillsMessage.textContent = "";
});
// Get the study calculator elements
const hoursPerDay = document.getElementById("hoursPerDay");
const daysPerWeek = document.getElementById("daysPerWeek");
const calculateHours = document.getElementById("calculateHours");
const hoursResult = document.getElementById("hoursResult");

// Calculate total weekly study hours
calculateHours.addEventListener("click", function () {

    const hours = Number(hoursPerDay.value);
    const days = Number(daysPerWeek.value);

    // Validate the hours
    if (hoursPerDay.value.trim() === "" || isNaN(hours) || hours < 0) {
        hoursResult.textContent =
            "Please enter a valid number of study hours.";
        return;
    }

    // Validate the days
    if (
        daysPerWeek.value.trim() === "" ||
        isNaN(days) ||
        days < 1 ||
        days > 7
    ) {
        hoursResult.textContent =
            "Days per week must be between 1 and 7.";
        return;
    }

    // Calculate the weekly study hours
    const totalHours = hours * days;

    hoursResult.textContent =
        "Your total weekly study hours are: " + totalHours + " hours.";
});