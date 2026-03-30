import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const welcomeText = document.getElementById("vendor-welcome");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  if (welcomeText) {
    welcomeText.textContent = `You are logged in as ${user.email}.`;
  }
});
