// Rename to meaningful names
// Use ids instead of class
let i = 0;

// Rename
const saveButton = document.getElementById("check-icon");
// Rename
const closeButton = document.getElementById("x-icon");

closeButton.addEventListener("click", function () {
    closeNote();
});

saveButton.addEventListener("click", function () {
  saveNote();
  closeNote();
});

function openNote() {
    const container3 = document.getElementsByClassName("container3")[0]
    container3.style.display = "block";
}

function closeNote() {
    const container3 = document.getElementsByClassName("container3")[0]
    container3.style.display = "none";
}

function saveNote() {
  const noteText = document.getElementById("note-text").value;

  const node0 = document.createElement("div");
  const node1 = document.createElement("h1");

  node1.innerHTML = noteText;

  node1.setAttribute(
    "style",
    "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden"
  );

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);

  const container2 = document.getElementsByClassName("container2")[0];
  container2.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.1)";
  });
  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)";
  });
  node0.addEventListener("dblclick", function () {
    node0.remove();
  });
  document.getElementById("note-text").value = "";
}

function margin() {
  const randomMargin = ["-5px", "1px", "5px", "10px", "15 px", "20px"];

  return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
  const randomRotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
  ];

  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {

  const randomColor = [
    "#EA5C2B",
    "#FF7F3F",
    "#F6D860",
    "#95CD41",
    "#81B214",
    "#FFCC29",
  ];

  if (i > randomColor.length - 1) {
    i = 0;
  }
  return randomColor[i++];
}
