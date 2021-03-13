export function ContactForm() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby6jRTrVhNkZn2ipk8E4hsJQy7sr6AxGGqO23Tunk-8iB53DbYMo_VGnZmjN9KRPdiQ/exec";
  const form = document.forms["submit-to-google-sheet"];
  const submitBtn = document.querySelector('.btn-submit');

  const resetButton = () => {
    submitBtn.classList.remove('-success');
    submitBtn.classList.remove('-failed');
    submitBtn.innerHTML = `
      <span class="fas fa-paper-plane"></span>
      Send
    `;
  }

  const resetForm = () => {
    resetButton();
    form.reset();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.classList.add('-request');
    submitBtn.innerHTML = `
      <span>
        <svg>
          <use xlink:href="#circle"/>
        </svg>
      </span>
      Sending..
    `;
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response)
        submitBtn.classList.remove('-request')
        submitBtn.classList.add('-success')
        submitBtn.innerHTML = `
          <span>
            <svg>
              <use xlink:href="#circle"/>
            </svg>
            <svg>
                  <use xlink:href="#check"/>
                </svg>
          </span>
          Success!
        `;
        setTimeout(resetForm, 2000);
      })
      .catch((error) => {
        console.error("Error!", error.message)
        submitBtn.classList.remove('-request')
        submitBtn.classList.add('-failed')
        submitBtn.innerHTML = `
          <span class="fas fa-exclamation-circle"></span>
          Oops! Try again in few sec..
        `;
        setTimeout(resetButton, 3000);
      });
  });
}
