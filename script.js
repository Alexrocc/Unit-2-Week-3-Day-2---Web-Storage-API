window.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("nameInput");
  const saveBtn = document.getElementById("saveBtn");
  const deleteBtn = document.getElementById("deleteBtn");

  saveBtn.onclick = saveInput;
  deleteBtn.onclick = () => {
    localStorage.removeItem("username");
    nameInput.value = "";
  };
  preLoadInput(nameInput);

  timeSpent();
});

const saveInput = () => {
  if (document.getElementById("nameInput").value) {
    localStorage.setItem("username", document.getElementById("nameInput").value);
  }
};

const preLoadInput = (inputNode) => {
  const storedName = localStorage.getItem("username");
  if (storedName && inputNode) {
    inputNode.value = storedName;
  }
};

const timeSpent = () => {
  let timerValue = sessionStorage.getItem("timer") ? parseInt(sessionStorage.getItem("timer")) : 0;
  document.getElementsByTagName("h3")[0].innerText = timerValue;
  setInterval(function () {
    timerValue += 1;
    sessionStorage.setItem("timer", timerValue);
    document.getElementsByTagName("h3")[0].innerText = timerValue;
  }, 1000);
};
