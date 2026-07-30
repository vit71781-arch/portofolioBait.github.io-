let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = display.value;

  // ubah simbol jadi operator
  expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

  try {
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

function sqrt() {
  try {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = Math.sqrt(value);
    }
  } catch {
    display.value = "Error";
  }
}
const tombol = document.getElementById("toggleDesc");
const deskripsi = document.getElementById("deskripsiBox");

tombol.addEventListener("click", () => {
  if (deskripsi.classList.contains("hidden")) {
    deskripsi.classList.remove("hidden");
    tombol.textContent = "Sembunyikan Deskripsi";
  } else {
    deskripsi.classList.add("hidden");
    tombol.textContent = "Tampilkan Deskripsi";
  }
});