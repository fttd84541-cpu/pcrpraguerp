import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getAuth,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = window.firebaseConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* OCHRANA MDT */
onAuthStateChanged(auth, (user) => {
if (!user) {
window.location.href = "login.html";
} else {
loadData();
}
});

/* NAČTENÍ PŘIHLÁŠEK */
async function loadData() {

const list = document.getElementById("list");
list.innerHTML = "";

const snap = await getDocs(collection(db, "applications"));

snap.forEach(doc => {

const d = doc.data();

const div = document.createElement("div");

div.className = "card";

div.innerHTML = `
<h3>${d.name}</h3>
<p>Discord: ${d.discord}</p>
<p>Věk: ${d.age}</p>
<p>Skóre: ${d.score || "?"}</p>
<p>Status: ${d.status || "čeká"}</p>
`;

list.appendChild(div);
});

}

/* LOGOUT */
window.logout = function() {
signOut(auth).then(() => {
window.location.href = "login.html";
});
};
