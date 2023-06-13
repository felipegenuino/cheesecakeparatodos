// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
    var feedback = document.querySelector(".feedbackalert");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
  
          setTimeout(function () {
            form.classList.add("d-none");
            feedback.classList.add("d-block");
          }, 1000);
  
          event.preventDefault();
        },
        false
      );
    });
  })();
  