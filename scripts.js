// Problem 4
function countCharacters() {
  const txt = document.getElementById("txtChar").value;
  const trimmedSentence = txt.replace(/\s+/g, " ").trim();
  const charCount = trimmedSentence.length;
  document.getElementById("txtCharResult").innerHTML = charCount;
}

// Problem 5
function checkEmail() {
  const email = document.getElementById("txtEmail").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const result = document.getElementById("emailResult");

  if (emailRegex.test(email)) {
    result.innerHTML = `${email} is a valid email address.`;
  } else {
    result.innerHTML = `${email} is not a valid email address.`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const countBtn = document.getElementById("count-btn");
  const emailBtn = document.getElementById("email-btn");

  if (countBtn) {
    countBtn.addEventListener("click", countCharacters);
  }

  if (emailBtn) {
    emailBtn.addEventListener("click", checkEmail);
  }
});

/*
Author: Julliana Onor
Description: This is a demo JS file for FA3 by Julliana Onor.
*/
