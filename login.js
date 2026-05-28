import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getAuth,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = window.firebaseConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* LOGIN */
document.getElementById("loginForm").addEventListener("submit", (e) => {
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then(() => {
window.location.href = "mdt.html";
})
.catch(() => {
alert("❌ Špatné přihlášení policie");
});
});

/* OCHRANA STRÁNKY */
onAuthStateChanged(auth, (user) => {
if (!user && window.location.pathname.includes("mdt.html")) {
window.location.href = "login.html";
}
});
