const form = document.querySelector('form#rating_form');
const submitBtn = document.querySelector('button[form="rating_form"]');
const cardWithForm = document.querySelector('#card-with-rating');
const thanksCard = document.querySelector('#thanks-card');
submitBtn.classList.add('disabled');
submitBtn.disabled = true;
let rating = 0;

const endTransitionCallback = (event) => {
  console.log('start en event');
  const { target } = event;
  target.removeEventListener('transitionend', endTransitionCallback);
  target.style.setProperty('display', 'none');

  setTimeout(() => {
    thanksCard.style.removeProperty('display');
  }, 300)
  
  setTimeout(() => {
    thanksCard.classList.remove('close');
    thanksCard.classList.add('open');
  }, 500);
}

const submitHandler = (event) => {
  event.preventDefault();
  rating = event.target?.rating?.value || 0;
  
  if (rating) {
    thanksCard.querySelector('.user-rating__num').textContent = rating;
    cardWithForm.classList.add('close');
    cardWithForm.addEventListener('transitionend', endTransitionCallback);
  }
}

const changeFormHandler = (event) => {
  const formData = new FormData(event.target.form);

  for (let value of formData.values()) {
    if(!value) {
      submitBtn.classList.add('disabled');
      submitBtn.disabled = true;
    }
  }

  submitBtn.classList.remove('disabled');
  submitBtn.disabled = false;
}

form.addEventListener('change', changeFormHandler);
form.addEventListener('submit', submitHandler);