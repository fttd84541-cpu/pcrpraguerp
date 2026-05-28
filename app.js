document.getElementById("form").addEventListener("submit", function(e) {
e.preventDefault();

let score = 0;

let inputs = document.querySelectorAll("textarea");

inputs.forEach(t => {
if (t.value.length > 30) {
score += 2;
}
});

let name = document.getElementById("name").value;

if (score >= 15) {
alert("✔ Přijato do náboru: " + name + " | Skóre: " + score);
} else {
alert("❌ Nepřijato: " + name + " | Skóre: " + score);
}

this.reset();
});
