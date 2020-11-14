const chat = document.querySelector(".chat-content");
const sendBtn = document.querySelector(".send-btn");
const message = document.querySelector(".message");

sendBtn.addEventListener("click", function () {
  chat.innerHTML = chat.innerHTML + "<br>" + message.value;
  message.value = "";
});
