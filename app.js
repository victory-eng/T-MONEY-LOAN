function sendToWhatsApp() {
  // 1. Enter your phone number with country code (no + or spaces)
  const phoneNumber = "+2348083507977"; 

  // 2. Get values from the form
  const fname = document.getElementById('firstName').value;
  const lname = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // 3. Validation: Make sure fields aren't empty
  if (fname === "" || lname === "" || email === "" || phone === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // 4. Create the message template
  // %0A is the code for a "New Line" in a URL
  const message = "Hello! I would like to apply for a business loan." + "%0A%0A" +
                  "*Name:* " + fname + " " + lname + "%0A" +
                  "*Email:* " + email + "%0A" +
                  "*Phone:* " + phone;

  // 5. Open the WhatsApp URL
  const whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;

  window.open(whatsappURL, '_blank').focus();
}