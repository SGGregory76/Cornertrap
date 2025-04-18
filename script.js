if (!localStorage.getItem("stats")) {
  localStorage.setItem("stats", JSON.stringify({ cash: 0, xp: 0, rep: 0 }));
}
if (!localStorage.getItem("inventory")) {
  localStorage.setItem("inventory", JSON.stringify(["Cellphone", "Bag of Seeds"]));
}

let stats = JSON.parse(localStorage.getItem("stats"));

function updateStats() {
  if (document.getElementById("liveCash")) document.getElementById("liveCash").textContent = "$" + stats.cash;
  if (document.getElementById("liveXP")) document.getElementById("liveXP").textContent = stats.xp + " XP";
  if (document.getElementById("liveRep")) document.getElementById("liveRep").textContent = stats.rep + " REP";
}

window.addEventListener("load", updateStats);
window.addEventListener("storage", () => {
  stats = JSON.parse(localStorage.getItem("stats"));
  updateStats();
});