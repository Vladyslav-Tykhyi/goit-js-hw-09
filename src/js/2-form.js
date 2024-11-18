let formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const LS_KEY = 'feedback-form-state';

formData = JSON.parse(localStorage.getItem(formData)) || { email: "", message: "" };
const { email, message } = formData;

if (email) { document.querySelector(`.feedback-form-input`).value = email }
if (message) { document.querySelector(`.feedback-form-textarea`).value = message };

form.addEventListener("input", makeDataFeedbackForm);
form.addEventListener("submit", sendDataFeedbackForm);

function makeDataFeedbackForm(evt) {
    if (evt.target.classList.contains(`feedback-form-input`)) {
        formData.email = evt.target.value.trim();
        localStorage.setItem(LS_KEY, JSON.stringify(formData))        
    } else if (evt.target.classList.contains(`feedback-form-textarea`)) {
        formData.message = evt.target.value.trim();
        localStorage.setItem(LS_KEY, JSON.stringify(formData))
    }          
};

function sendDataFeedbackForm(evt) {
    evt.preventDefault();
    const value = localStorage.getItem(LS_KEY);
    if (!formData.email || !formData.message) {
        alert(`Fill please all fields`);
        return;
    };
    form.reset();
    localStorage.removeItem(LS_KEY)
};

