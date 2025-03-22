let inputVal = JSON.parse(localStorage.getItem("inputVal"));

function renderHTML() {
  let emailHTML = "";

  emailHTML += `
  A confirmation email has been sent to
  <strong><span class="email-input">${inputVal}</span></strong>. 
  Please open it and click the button inside to confirm your
  subscription.`;

  document.querySelector(".confirm-text").innerHTML = emailHTML;
}

window.addEventListener("load", renderHTML, localStorage.clear());
