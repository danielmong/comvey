window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["chat-interface"] = function (options) {
    const { openAiApiKey } = options;
    const container = document.createElement("div");
    container.innerHTML = `
      <textarea id="user-input" placeholder="Ask me something..."></textarea>
      <button id="send-btn">Send</button>
      <div id="chat-response"></div>
    `;
    container.style.padding = "20px";
    container.style.border = "1px solid #ccc";
  
    document.body.appendChild(container);
  
    document.getElementById("send-btn").onclick = async () => {
      const userInput = document.getElementById("user-input").value;
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: userInput,
        }),
      });
      const data = await response.json();
      document.getElementById("chat-response").innerText =
        data.choices[0].text || "No response";
    };
  };