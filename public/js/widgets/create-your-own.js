window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["create-your-own"] = function (options) {
  const { htmlContent, cssStyles } = options;

  const widget = document.createElement("div");
  widget.innerHTML = htmlContent;
  widget.style = cssStyles;

  document.body.appendChild(widget);
};