const subtitle = document.querySelector("#subtitle");

subtitle.textContent = "I am from Nigeria!";

const button = document.createElement("button");
button.textContent = "Click Me!";
const buttonContainer = document.querySelector("#about");
buttonContainer.appendChild(button)

const from = document.querySelector("#from");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const successMessage = document.createElement("p");
successMessage.style.color = "green";
successMessage.style.margin = "20px";
successMessage.style.fontSize = "18px";

const contactsection = document.querySelector("#contact");

const form = document.querySelector("form");

form.addEventListener("submit", function (event){
	    event.preventDefault();
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };
        successMessage.textContent = `Hi ${formData.name},
                                     A response email will be sent to ${formData.email}`;
        contactsection.appendChild(successMessage);
    });