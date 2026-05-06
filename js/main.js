function setName() {
  document.getElementById("chatName").innerText =
    document.getElementById("name").value;

  let dpUrl = document.getElementById("dpInput").value;
  if (dpUrl) {
    document.getElementById("dp").src = dpUrl;
  }
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
