import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const navAuthArea = document.getElementById("nav-auth-area");

function renderLoggedOutNav() {
  if (!navAuthArea) return;

  navAuthArea.innerHTML = `
    <a href="login.html">Vendor Login</a>
    <a href="signup.html">Sign Up</a>
  `;
}

function renderLoggedInNav(user) {
  if (!navAuthArea) return;

  navAuthArea.innerHTML = `
    <a href="dashboard.html">Dashboard</a>
    <span>${user.email || "Logged in"}</span>
    <button id="logout-btn" type="button">Log Out</button>
  `;

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
        window.location.href = "index.html";
      } catch (error) {
        console.error("Logout failed:", error);
        alert("Logout failed. Please try again.");
      }
});
