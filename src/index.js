// Select DOM elements
const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelector(".requirement-list li");

// Array of objects containing password requirements with corresponding regular expressions and index of the requirement list items
const requirements = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 Characters
  { regex: /[0-9]/, index: 1 }, // At least one Number
  { regex: /[a-z]/, index: 2 }, // At least one Lowercase Letter
  { regex: /[^A-Za-z0-0]/, index: 3 }, // At least one Special Character
  { regex: /[A-Z]/, index: 4 }, // At least one Uppercase Letter
];

passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    // Check if the password matches the corresponding requirements regex
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    // Update class and icon of requirement item if the requirement matches
    if (isValid) {
      requirementItem.classList.add("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-check";
    } else {
      requirementItem.classList.remove("valid");
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
    }
  });
});

eyeIcon.addEventListener("click", () => {
  // Toggle Password Input Type between "Password" and "Text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Update Eye Icon class based on the Password Input Type
  eyeIcon.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
