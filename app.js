let inp = document.querySelector("input");
let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);
  ul.appendChild(item);
  inp.value = "";
});

let delbtns = document.querySelectorAll(".delete");
for (delbtn of delbtns) {
  console.log("abc");
  delbtn.addEventListener("click", function () {
    let par = this.parentElement;
    console.log("def");
    par.remove();
  });
}

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
