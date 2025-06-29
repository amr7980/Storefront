document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("shopperForm");
  const output = document.getElementById("jsonOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const shopper = {
      email: document.getElementById("email").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value || null,
      age: parseInt(document.getElementById("age").value),
      address: document.getElementById("address").value
    };

    output.textContent = JSON.stringify(shopper, null, 2);
    form.reset();
    form.classList.remove("was-validated");
  });
});
