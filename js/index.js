//SOME VARIABLES////////////////////////////////////////////////////////////////////////////////////
//date variables
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
//skills variables
const skills = ["JavaScript", "CSS", "HTML"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
//variable for leave_message form
const messageForm = document.querySelector('[name="leave_message"]');

//COPYRIGHT & FOOTER////////////////////////////////////////////////////////////////////////////////////
//copyright
copyright.innerHTML = "&nbsp;&nbsp;&copy; Brendan O'Connor, " + thisYear;
//Append copyright to footer
footer.appendChild(copyright);

//SKILLS LOOP////////////////////////////////////////////////////////////////////////////////////
//for loop to show skills
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

//FORM SUBMISSION PROCESS////////////////////////////////////////////////////////////////////////////////////
//event listener for when form is submitted
messageForm.addEventListener("submit", (e) => {
  //stop refresh
  e.preventDefault();
  //variables for 3 form fields
  const name = document.querySelector('[name="name"]');
  const email = document.querySelector('[name="email"]');
  const message = document.querySelector('[name="message"]');

  //return values for 3 form fields, followed by logging them to console
  const valueName =
    "Name: " +
    e.target.name.value +
    ", Email: " +
    e.target.email.value +
    ", Message: " +
    e.target.message.value;

  //set variables for form field values
  const nameValue = e.target.name.value;
  const emailValue = e.target.email.value;
  const messageValue = e.target.message.value + "         ";

  //set variables for messageSection (#messages), messageList (ul in #messages), & newMessage (creating new li)
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  //set innerHTML of message to name (linked to email) & each message value
  newMessage.innerHTML =
    `<a href="mailto:${emailValue}">${nameValue}</a>` +
    `<span> wrote: ${messageValue}</span>`;

  //ADD REMOVE BUTTON & LISTENER, APPEND REMOVE BUTTON, & RESET VALUES///////////////////////////////////////////
  //add remove button w/text & button type
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";

  //remove button event listener, remove entry when click
  removeButton.addEventListener("click", (e) => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  //append removeButton to newMessage & newMessage to messageList
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //reset values in 3 form fields
  name.value = "";
  email.value = "";
  message.value = "";
});
