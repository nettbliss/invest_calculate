function update() {
  let money = +document.querySelector(".money").value;
  let year = +document.querySelector(".years").value;
  let result = money + money * 0.12 * year;
  document.querySelector(".result").textContent = result;
}
update();
document.querySelector(".money").addEventListener("input", update);
document.querySelector(".years").addEventListener("input", update);
