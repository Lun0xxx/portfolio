function goToProjects() {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView();
}

function sendEmail() {
    const sendButton = document.querySelector(".send-button");
    const destinataire = "alliaumebrandon1@gmail.com";
    const sender = document.querySelector(".email-input").value;
    const objet = document.querySelector(".object-input").value;
    const message = document.querySelector(".message-area").value;
    const emailParams = {
        to_email: destinataire,
        from_email: sender,
        subject: objet,
        text: message
    };

    console.log(emailjs.send("service_k1qmlmg", "template_d420hxe", emailParams, "e9PHMvPn0294_PI3L")
        .then(function(response) {
            console.log("envoyé");
            sendButton.textContent  = "Envoyé";
            sendButton.style.backgroundColor = "lightgreen";
            sendButton.style.color = "white";
            sendButton.style.borderColor = "lightgreen";
            sendButton.style.fontWeight = "bold";
            setTimeout(function() {
                sendButton.textContent = "Envoyer";
                sendButton.style.backgroundColor = "white";
                sendButton.style.color = "rgba(238, 87, 118, 255)";
                sendButton.style.borderColor = "rgba(238, 87, 118, 255)";
            }, 3000);
        })
        .catch(function(error) {
            console.log("error");
            sendButton.textContent  = "Non envoyé";
            sendButton.style.backgroundColor = "red";
            sendButton.style.color = "white";
            sendButton.style.borderColor = "red";
            sendButton.style.fontWeight = "bold";
            setTimeout(function() {
                sendButton.textContent = "Envoyer";
                sendButton.style.backgroundColor = "white";
                sendButton.style.color = "rgba(238, 87, 118, 255)";
                sendButton.style.borderColor = "rgba(238, 87, 118, 255)";
            }, 3000);
        }))
}