import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    message.textContent = "Logging you in...";

    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.textContent = "Login successful.";
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error(error);
      message.textContent = "Login failed. Please check your email and password.";
    }
  });
}
