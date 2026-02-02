// 01 - Larger or Smaller
// Prompts for two integers and displays the larger (or equality) on the page.

(function () {
  const a = parseInt(prompt("Enter the first integer:"), 10);
  const b = parseInt(prompt("Enter the second integer:"), 10);

  let message;

  if (Number.isNaN(a) || Number.isNaN(b)) {
    message = "One or both entries were not valid integers.";
  } else if (a > b) {
    message = `${a} is larger than ${b}.`;
  } else if (b > a) {
    message = `${b} is larger than ${a}.`;
  } else {
    message = `Both numbers are equal (${a}).`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const out = document.getElementById("output");
    if (out) out.textContent = message;
    else document.body.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
  });
})();
