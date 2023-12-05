import { url, successNotification, errorNotification } from "../utils/utils.js";

// Form Registration
const form_register = document.getElementById("form_register");
form_register.onsubmit = async (e) => {
  e.preventDefault();

  document.querySelector("#form_register button").disabled = true;
  document.querySelector(
    "#form_register button"
  ).innerHTML = `<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

  const formData = new FormData(form_register); // data from the forms

  //   Fetch API user registration endpoint
  const response = await fetch(url + "/api/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  // get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();
    console.log(json);

    successNotification("Successfulyy registered!", 3);

    form_register.reset();
  } else if (response.status == 422) {
    const json = await response.json();

    errorNotification("Failed registration!", 3);
  }

  document.querySelector("#form_register button").disabled = false;
  document.querySelector("#form_register button").innerHTML = "Create Account";
};
