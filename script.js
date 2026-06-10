function submitForm() {
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;

  document.getElementById("result").innerText =
    `Thank you ${name}! You are registered as ${role}.`;
}


// Simple AI chatbot concept
function chat() {
  let input = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");

  let response = "";

  if (input.toLowerCase().includes("fever")) {
    response = "AI: Drink water, take rest, and monitor temperature.";
  } else if (input.toLowerCase().includes("emergency")) {
    response = "AI: Call nearest hospital or ambulance immediately.";
  } else {
    response = "AI: Please consult a healthcare professional.";
  }

  chatbox.innerHTML += `<p><b>You:</b> ${input}</p>`;
  chatbox.innerHTML += `<p><b>${response}</b></p>`;

  document.getElementById("userInput").value = "";
}