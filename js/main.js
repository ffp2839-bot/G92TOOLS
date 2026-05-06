function setName() {
  document.getElementById("chatName").innerText =
    document.getElementById("name").value;

  let dpUrl = document.getElementById("dpInput").value;
  if (dpUrl) {
    document.getElementById("dp").src = dpUrl;
  }
}
function generateCaption() {
  let input = document.getElementById("captionInput").value;

  let captions = [
    "🔥 Living my best " + input + " life",
    "💯 " + input + " vibes only",
    "🚀 Hustle + " + input + " = success",
    "😎 Stay real, stay " + input
  ];

  let random = captions[Math.floor(Math.random() * captions.length)];
  document.getElementById("captionOutput").innerText = random;
}
// TAB SWITCH
function openTab(tab) {
  let contents = document.getElementsByClassName("tab-content");
  let buttons = document.getElementsByClassName("tab-btn");

  for (let c of contents) c.classList.remove("active");
  for (let b of buttons) b.classList.remove("active");

  document.getElementById(tab).classList.add("active");
  event.target.classList.add("active");
}

// PROFIT
function calcProfit() {
  let buy = Number(document.getElementById("buy").value);
  let sell = Number(document.getElementById("sell").value);

  let result = sell - buy;

  document.getElementById("profitResult").innerText =
    "Result: ₹" + result;
}

// SIP
function calcSIP() {
  let P = Number(document.getElementById("monthly").value);
  let r = Number(document.getElementById("rate").value) / 100 / 12;
  let n = Number(document.getElementById("years").value) * 12;

  let future = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  document.getElementById("sipResult").innerText =
    "Future Value: ₹" + future.toFixed(0);
}
function sendMessage() {
  let msg = document.getElementById("message").value;
  let time = document.getElementById("time").value || "Now";

  let div = document.createElement("div");
  div.className = "message sent";
  div.innerHTML = msg + `<span class="time">${time}</span>`;

  document.getElementById("chatBody").appendChild(div);
}

function downloadChat() {
  html2canvas(document.getElementById("chatBox")).then(canvas => {
    let link = document.createElement("a");
    link.download = "chat.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
