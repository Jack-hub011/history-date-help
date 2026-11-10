
// Shows or hides additional information about an event
function toggleInfo(eventId) {

    // Find the paragraph containing the extra information
    let info = document.getElementById(eventId);

    // Check if the information is currently hidden
    if (info.style.display === "none") {

        // Show the information
        info.style.display = "block";

    } else {

        // Hide the information
        info.style.display = "none";

    }
}
