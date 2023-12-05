const url = "http://laravel1.test";

/**
 * Executes a success notification message for a specified duration.
 *
 * @param {string} message - The message to display in the success notification.
 * @param {number} seconds - The duration, in seconds, for the success notification to be displayed.
 * @return {undefined} This function does not return a value.
 */
function successNotification(message, seconds) {
  document.querySelector(".alert-success").classList.remove("d-none");
  document.querySelector(".alert-success").classList.add("d-block");
  document.querySelector(".alert-success").innerHTML = message;

  setTimeout(function () {
    document.querySelector(".alert-success").classList.remove("d-block");
    document.querySelector(".alert-success").classList.add("d-none");
  }, seconds * 3000);
}

/**
 * Displays an error notification message for a specified number of seconds.
 *
 * @param {string} message - The error message to be displayed.
 * @param {number} seconds - The number of seconds the notification should be displayed for.
 */
function errorNotification(message, seconds) {
  document.querySelector(".alert-danger").classList.remove("d-none");
  document.querySelector(".alert-danger").classList.add("d-block");
  document.querySelector(".alert-danger").innerHTML = message;
  setTimeout(function () {
    document.querySelector(".alert-danger").classList.remove("d-block");
    document.querySelector(".alert-danger").classList.add("d-none");
  }, seconds * 3000);
}

export { url, successNotification, errorNotification };
