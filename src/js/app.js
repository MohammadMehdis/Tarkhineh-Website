"use strit";

const fistName = document.querySelector(".item-1");
const lastName = document.querySelector(".item-2");
const emailADS = document.querySelector(".item-3");
const number = document.querySelector(".item-4");
const date = document.querySelector(".item-5");
const fakeName = document.querySelector(".item-6");

fistName.value = "سردار";
lastName.value = "وظیفه";
emailADS.value = "Example@gmail.com";
number.value = "0914 468 5033";
date.value = "1990-01-01";
fakeName.value = "Sardar";

document
  .getElementById("save-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.getElementById("profile-form");
    const data = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      phone: form.phone.value,
      birth_date: form.birth_date.value,
      username: form.username.value,
    };

    fetch("https://tarkhineh.liara.run/authentication/profile/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        function showToast() {
          Swal.fire({
            toast: true,
            icon: "success",
            title: "عملیات با موفقیت انجام شد",
            showConfirmButton: false,
            timer: 3000,
            position: "top-end",
          });
        }

        document
          .getElementById("save-button")
          .addEventListener("click", function (event) {
            event.preventDefault();
            showToast();
          });
        ``;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
