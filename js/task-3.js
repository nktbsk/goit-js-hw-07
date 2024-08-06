/*
? Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input)
? підставляє його поточне значення в span#name-output як ім’я для привітання.
? Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній
? або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
 */

// const inputEl = document.querySelector("#name-input");

// const inputForName = (event) => {
//   event.preventDefault();

//     const formData = {

//   };

//   inputEl.reset();
// };

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const trimmedValue = inputEl.value.trim();
  outputEl.textContent = trimmedValue ? trimmedValue : "Anonymous";
});

// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// nameInput.addEventListener("input", () => {
//   const trimmedValue = nameInput.value.trim();
//   nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymous";
// });
