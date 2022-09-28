window.onload = setInterval(cmdPrompt, 1000);

function cmdPrompt() {
    const prompt = document.getElementById("prompt");
    if (prompt.style.display === "none") {
        prompt.style.display = "inline";
    } else {
        prompt.style.display = "none";
    }
}