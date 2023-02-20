document.getElementById("btn").addEventListener("click", function(event) {
  event.preventDefault(); // prevent form submission

  if (validateForm()) { // check if form is valid
    const section = document.getElementById('section')
    section.classList.remove("d-none");

    const name = document.getElementById('inputName1').value
    const email = document.getElementById('inputEmail1').value
    const phone = document.getElementById('inputPhone1').value

    document.getElementById('name').innerHTML = name
    document.getElementById('email').innerHTML = email
    document.getElementById('phone').innerHTML = phone
  }
});

function validateForm() {
  const name = document.getElementById('inputName1').value.trim();
  const email = document.getElementById('inputEmail1').value.trim();
  const phone = document.getElementById('inputPhone1').value.trim();

  // validate name
  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  // validate email
  if (email === "") {
    alert("Email must be filled out");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Invalid email address");
    return false;
  }

  // validate phone
  if (phone === "") {
    alert("Phone must be filled out");
    return false;
  } else if (!isValidPhone(phone)) {
    alert("Invalid phone number. Please enter a phone number in the format: 92-345-6789101");
    return false;
  }
  
  return true; // return true if form is valid
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[0-9]{2}-[0-9]{3}-[0-9]{7}$/;
  return phoneRegex.test(phone);
}

