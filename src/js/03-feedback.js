import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_ACC = 'feedback-form-state';

let formData = {};
populateMessageInput();

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(KEY_ACC, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(KEY_ACC));
  formData = {};
  evt.currentTarget.reset();

  localStorage.removeItem(KEY_ACC);
}

function populateMessageInput() {
  try {
    const savedMessage = localStorage.getItem(KEY_ACC);
    if (!savedMessage) return;
    formData = JSON.parse(savedMessage);
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch ({ message }) {
    console.log(message);
  }
}
