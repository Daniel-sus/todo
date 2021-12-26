let button = document.getElementById("button");
let wrapper = document.getElementById("wrapper");
let tasks = [];
const render = () => {
  tasks.forEach((string, index) => {
    let note = document.createElement("li");
    let text = document.createElement("p");
    let remove = document.createElement("div");
    text.innerHTML = string;
    note.className = "note";
    remove.className = "remove";
    remove.innerHTML = "X";
    note.append(text);
    note.append(remove);
    wrapper.append(note);
    remove.addEventListener("click", () => {
      tasks = tasks.filter(function (elem, num) {
        return num !== index;
      });
      wrapper.innerHTML = "";
      render();
    });
  });
};
const handleClickAdd = () => {
  let input = document.getElementById("input1");
  let inputvalue = input.value;
  input.value = "";
  tasks.push(inputvalue);
  wrapper.innerHTML = "";
  render();
};
button.addEventListener("click", handleClickAdd);
