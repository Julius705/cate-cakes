document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const details = document.getElementById("details").value;

  fetch("/submit-booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, date, time, details })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      document.getElementById("confirmationMessage").innerHTML = `
        Thank you, ${name}! 📅<br>
        Your consultation is booked for <strong>${date}</strong> at <strong>${time}</strong>.<br>
        A confirmation email will be sent to <strong>${email}</strong> shortly.
      `;
    } else {
      document.getElementById("confirmationMessage").innerHTML = "Something went wrong. Please try again.";
    }
  });
});