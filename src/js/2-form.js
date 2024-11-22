// let formData = { email: "", message: "" };

// const form = document.querySelector(".feedback-form");
// const LS_KEY = 'feedback-form-state';

// formData = JSON.parse(localStorage.getItem(formData)) || { email: "", message: "" };
// const { email, message } = formData;

// if (email) { document.querySelector(`.feedback-form-input`).value = email }
// if (message) { document.querySelector(`.feedback-form-textarea`).value = message };

// form.addEventListener("input", makeDataFeedbackForm);
// form.addEventListener("submit", sendDataFeedbackForm);

// function makeDataFeedbackForm(evt) {
//     if (evt.target.classList.contains(`feedback-form-input`)) {
//         formData.email = evt.target.value.trim();
//         localStorage.setItem(LS_KEY, JSON.stringify(formData))        
//     } else if (evt.target.classList.contains(`feedback-form-textarea`)) {
//         formData.message = evt.target.value.trim();
//         localStorage.setItem(LS_KEY, JSON.stringify(formData))
//     }          
// };

// function sendDataFeedbackForm(evt) {
//     evt.preventDefault();
//     const value = localStorage.getItem(LS_KEY);
//     if (!formData.email || !formData.message) {
//         alert(`Fill please all fields`);
//         return;
//     };
//     form.reset();
//     localStorage.removeItem(LS_KEY)
// };

const formData = { email: '', message: '' };

const form = document.querySelector('form.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const localData = localStorage.getItem('feedback-form-state');
if (localData) {
  const { email, message } = JSON.parse(localData);
  formData.email = email;
  formData.message = message;
  input.value = email;
  textarea.value = message;
}

const handleChangeInput = e => {
  formData.email = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const handleChangeTextarea = e => {
  formData.message = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const handleSubmit = e => {
  e.preventDefault();

  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
  } else alert('Fill please all fields');
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  input.value = '';
  textarea.value = '';
};

input.addEventListener('input', handleChangeInput);
textarea.addEventListener('input', handleChangeTextarea);
form.addEventListener('submit', handleSubmit);