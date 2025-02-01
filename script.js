// Function to change the language of some text on the page
function changeLanguage() {
    // Get the value of the selected language
    var language = document.getElementById("language-selector").value;

    // Change text based on selected language
    if (language === "hi") { // If "Hindi" is selected
        document.getElementById("hero-title").innerText = "फार्मटेक: स्मार्ट फार्मिंग";
        document.getElementById("hero-subtitle").innerText = "कटिंग-एज तकनीक के साथ किसानों को सशक्त बनाना";
        document.querySelector(".hero-buttons button:first-child").innerText = "अपनी फसल के बारे में अधिक जानें";
        document.querySelector(".hero-buttons button:last-child").innerText = "मंडी के बारे में अधिक जानें";
    } else { // If "English" is selected
        document.getElementById("hero-title").innerText = "FarmTech: Smart Farming";
        document.getElementById("hero-subtitle").innerText = "Empowering Farmers with Cutting-edge Technology";
        document.querySelector(".hero-buttons button:first-child").innerText = "Know more about your Crop";
        document.querySelector(".hero-buttons button:last-child").innerText = "Know more about Mandis";
    }
}

// Function to show a message when clicking the "Know more about your Crop" button
function showCropInfo() {
    alert("Redirecting to crop information page."); // Show an alert (popup)
    // Code to go to another page could go here
    // Example: window.location.href = "/crop-info";
}

// Function to show a message when clicking the "Know more about Mandis" button
function showMandiInfo() {
    alert("Redirecting to mandi information page."); // Show an alert (popup)
    // Code to go to another page could go here
    // Example: window.location.href = "/mandi-info";
}

// Function to open specific pages when clicking on the "Sell", "Government Schemes", or "Contract Farming" sections
function openPage(page) {
    if (page === "sell") {
        alert("Redirecting to sell page."); // Show an alert (popup)
        // Example: window.location.href = "/sell";
    } else if (page === "schemes") {
        alert("Redirecting to government schemes page."); // Show an alert (popup)
        // Example: window.location.href = "/government-schemes";
    } else if (page === "contract") {
        alert("Redirecting to contract farming page."); // Show an alert (popup)
        // Example: window.location.href = "/contract-farming";
    }
}
