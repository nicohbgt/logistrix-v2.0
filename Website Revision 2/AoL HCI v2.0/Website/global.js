const toggleButton = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const body = document.body;

toggleButton.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  body.classList.toggle('body-shift');
});


document.addEventListener("DOMContentLoaded", function () {
    const extraButton = document.getElementById("logout-button");
    extraButton.addEventListener("click", function (e) {
      const confirmed = confirm("Apakah Anda yakin ingin logout?");
      if (!confirmed) {
        e.preventDefault();
      }
    });
  });