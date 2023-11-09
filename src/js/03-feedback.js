import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_ACC = 'feedback-form-state';

const formData = {};
populateMessageInput();

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_ACC, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  localStorage.removeItem(KEY_ACC);
}

function populateMessageInput() {
  const savedMessage = localStorage.getItem(KEY_ACC);
  console.log(savedMessage);
  if (savedMessage) {
    form.elements.email.value = JSON.parse(savedMessage).email;
    form.elements.message.value = JSON.parse(savedMessage).message;
  }
}
