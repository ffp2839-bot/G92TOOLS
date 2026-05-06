// TAB SWITCH (agar use kar raha hai)
function openTab(tab) {
  let contents = document.getElementsByClassName("tab-content");
  let buttons = document.getElementsByClassName("tab-btn");

  for (let c of contents) c.classList.remove("active");
  for (let b of buttons) b.classList.remove("active");

  document.getElementById(tab).classList.add("active");
  event.target.classList.add("active");
}

// 🔥 AI CAPTION GENERATOR
async function generateCaption() {
  let input = document.getElementById("captionInput").value;
  let output = document.getElementById("captionOutput");

  if (!input) {
    output.innerHTML = "⚠️ Enter something first";
    return;
  }

  // Loader
  output.innerHTML = "Generating... ⏳";

  try {
    let res = await fetch("http://localhost:3000/generate-caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic: input })
    });

    let data = await res.json();

    // Split lines into cards
    let captions = data.result.split("\n").filter(line => line.trim() !== "");

    let html = "";

    captions.forEach(text => {
      html += `
        <div style="
          background:#fff;
          padding:12px;
          margin:10px;
          border-radius:10px;
          box-shadow:0 2px 8px rgba(0,0,0,0.1);
        ">
          <p>${text}</p>
          <button onclick="copyText(\`${text}\`)">📋 Copy</button>
        </div>
      `;
    });

    output.innerHTML = html;

  } catch (err) {
    output.innerHTML = "❌ Server error. Check backend.";
  }
}

// 📋 COPY FUNCTION
function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied! ✅");
}
