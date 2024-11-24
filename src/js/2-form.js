const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const handleInput = event => {
  formData[event.target.name] = event.target.value;
  saveFormData();
};

const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
};

loadFormData();
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);