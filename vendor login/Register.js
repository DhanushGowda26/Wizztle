
document.getElementById("displayPassword").addEventListener("click", passwordVisibility);

function passwordVisibility() {
    var displayPass = document.getElementById("showPassword");
    if (displayPass.type === "password") {
        displayPass.type = "text";
    } else {
        displayPass.type = "password";
    }
}
