window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["whatsapp-chat"] = function (options) {
  const { phone, message } = options;
  const widget = document.createElement("div");
  widget.innerHTML = `
    <a href="https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}" target="_blank">
      <button style="padding: 10px; background-color: green; color: white; border: none; border-radius: 5px;">Chat with us</button>
    </a>
  `;
  widget.style.position = "fixed";
  widget.style.bottom = "20px";
  widget.style.right = "20px";

  document.body.appendChild(widget);
};