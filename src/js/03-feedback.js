const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');
const KEY_ACC = 'feedback-form-state';

populateMessageInput();

email.addEventListener('input', onEmailInput);
message.addEventListener('input', onMessageInput);
form.addEventListener('submit', onFormSubmit);

function onMessageInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(KEY_ACC, message);
}

function onEmailInput(evt) {
  const email = evt.target.value;
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  localStorage.removeItem(KEY_ACC);
}

function populateMessageInput(evt) {
  const savedMessage = localStorage.getItem(KEY_ACC);
  if (savedMessage) {
    message.value = savedMessage;
  }
}
